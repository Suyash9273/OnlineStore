import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import Order from "@/models/Order";
import { connect } from "http2";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if(!session || !session.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        await connectToDatabase();
        const orders =await Order.find({userId: session.user.id}).populate({
            path: "productId",
            select: "name imageUrl",
            options: {strictPopulate: false}
        }).sort({ createdAt: -1 }).lean();

        return NextResponse.json({ orders }, { status: 200 });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
    }
}