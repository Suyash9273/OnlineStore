"use client";
import { useSession } from "next-auth/react";
import AdminProductForm from "../components/AdminProductForm";

export default function AdminPage() {
  const { data: session } = useSession();
  console.log("AdminPage session:", session);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
        <AdminProductForm />
      </div>
    </div>
  );
}