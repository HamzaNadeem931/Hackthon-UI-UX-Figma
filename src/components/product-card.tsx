import { Star } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ProductCardProps {
  title: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  dimensions?: string
  className?: string
}

export default function ProductCard({
  title,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  dimensions,
  className,
}: ProductCardProps) {
  return (
    <div className={cn("group relative space-y-2", className)}>
      <div className="relative overflow-hidden rounded-lg border bg-white">
        <img
          src={image}
          alt={title}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {dimensions && (
          <div className="absolute right-2 top-2 rounded bg-white/90 px-2 py-1 text-xs font-medium">
            {dimensions}
          </div>
        )}
      </div>
      <div className="space-y-1 p-1">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3 w-3",
                i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">${originalPrice}</span>
          )}
          {originalPrice && (
            <span className="text-xs text-red-500">-{Math.round(((originalPrice - price) / originalPrice) * 100)}%</span>
          )}
        </div>
      </div>
    </div>
  )
}

