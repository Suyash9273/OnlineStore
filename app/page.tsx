"use client"

import React, { useEffect, useState } from "react";
import { IProduct } from "@/models/Product";
import { apiClient } from "@/lib/api-client";
import { set } from "mongoose";
import ImageGallery from "./components/ImageGallery";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await apiClient.getProducts();
        setProducts(data);
      }
      catch (error) {
        console.error("Error fetching products:", error);
        alert("Error occured in home page during product fetching....");
      }
    }

    fetchProducts();
  }, [])
  console.log("products:", products)

  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Our Latest Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our curated selection of high-quality products designed for the modern lifestyle.
          </p>
        </header>



        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ImageGallery products={products} />
          </div>
        </div>

      </div>
    </main>
  )
}
