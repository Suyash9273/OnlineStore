import { IProduct } from "@/models/Product";
import { Image } from "@imagekit/next";
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: IProduct
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5",
        className,
      )}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
        <Image
          urlEndpoint="https://ik.imagekit.io/ge6mszhx1d"
          src={product.imageUrl || "/placeholder.svg?height=400&width=600&query=product-image"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-white/90">{product.name}</h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
          {product.description}
        </p>

        <div className="mt-auto pt-6">
          <button className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200 active:scale-[0.98]">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

