import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { connectToDatabase } from "@/lib/db";
import Order from "@/models/Order";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.text();
        const signature = req.headers.get("x-razorpay-signature");
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
            .update(body)
            .digest("hex");

        if(signature !== expectedSignature) {
            return new Response("Invalid signature", { status: 400 });
        }
        const event = JSON.parse(body);
        await connectToDatabase();

        if(event.event === "payment.captured") {
            const payment = event.payload.payment.entity;
            // Process the payment data as needed, e.g., update order status in the database
            const order = await Order.findOneAndUpdate({razorpayOrderId: payment.order_id}, 
                {razorpayPaymentId: payment.id, status: "completed"},
            ).populate([
                {path: "productId", select: "name"},
                {path: "userId", select: "email"}
            ]);

            if(order) {
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: Number(process.env.SMTP_PORT),
                    secure: false,
                });
                await transporter.sendMail({
                    from: process.env.SMTP_USER,
                    to: order.userId.email, 
                    subject: "Order Confirmation",
                    text: `Your order for ${order.productId.name} has been confirmed. Payment ID: ${payment.id}`,
                });
                return new Response("Payment processed and email sent", { status: 200 });
            }
        }

        return NextResponse.json({ received: true });

    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
    }
}