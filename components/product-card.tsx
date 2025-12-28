import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface Product {
  id: string
  title: string
  description: string
  price: number
  image: string
  category: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all hover:ring-1 hover:ring-primary/20">
      <div className="aspect-[3/2] overflow-hidden relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-0.5 text-xs font-medium bg-background/80 backdrop-blur-md rounded-full border border-border">
            {product.category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-lg font-medium">${product.price}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{product.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button variant="outline" className="w-full group/btn flex items-center justify-center gap-2 bg-transparent">
          View Details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
