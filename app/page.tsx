import { ProductCard } from "@/components/product-card"

const PRODUCTS = [
  {
    id: "1",
    title: "Minimalist Watch",
    description: "A sleek, timeless timepiece for every occasion.",
    price: 199,
    image: "/minimalist-watch.png",
    category: "Accessories",
  },
  {
    id: "2",
    title: "Leather Backpack",
    description: "Premium handcrafted leather for your daily essentials.",
    price: 249,
    image: "/brown-leather-backpack.png",
    category: "Travel",
  },
  {
    id: "3",
    title: "Wireless Headphones",
    description: "Immersive sound quality with noise cancellation technology.",
    price: 299,
    image: "/wireless-headphones.png",
    category: "Electronics",
  },
  {
    id: "4",
    title: "Ergonomic Chair",
    description: "Designed for ultimate comfort during long work hours.",
    price: 499,
    image: "/ergonomic-chair.png",
    category: "Office",
  },
  {
    id: "5",
    title: "Smart Thermostat",
    description: "Energy-efficient climate control for your modern home.",
    price: 149,
    image: "/smart-thermostat.png",
    category: "Home",
  },
  {
    id: "6",
    title: "Portable Speaker",
    description: "Powerful sound in a compact, waterproof design.",
    price: 89,
    image: "/portable-speaker.png",
    category: "Electronics",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Our Latest Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our curated selection of high-quality products designed for the modern lifestyle.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
