import { ProductCard } from "@/components/product-card";
import { IProduct } from "@/models/Product";

interface ImageGalleryProps {
    products: IProduct[];
}

export default function ImageGallery({products}: ImageGalleryProps) {
    return (
        <div>
            {
                products && Array.isArray(products) && products.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })
            }
        </div>
    )
}