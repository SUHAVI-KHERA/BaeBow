import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-xl transition-transform duration-300 hover:scale-102">
      <Link href={`/shop/${product.id}`} className="block">
        <Image
          src={product.images[0]}
          alt={product.name}
          data-ai-hint="woman office wear"
          width={600}
          height={800}
          className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full bg-white/80 text-foreground backdrop-blur-sm hover:bg-white">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Wishlist</span>
        </Button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-headline text-lg font-semibold text-accent">
              <Link href={`/shop/${product.id}`} className="hover:underline">{product.name}</Link>
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-lg font-semibold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">4.8</span>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
                {product.styleTags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                ))}
            </div>
          </div>
          <Button size="icon" className="h-10 w-10 flex-shrink-0 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Add to Bag</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
