"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { Heart, Plus, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/context/WishlistProvider";
import { useCart } from "@/context/CartProvider";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const isItemWishlisted = isWishlisted(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    if (isItemWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const defaultSize = product.sizes[0];
    if (defaultSize) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: defaultSize,
      });
      toast({
        title: "Added to Bag!",
        description: `${product.name} has been added to your bag.`,
      });
    } else {
        toast({
            title: "Could not add to bag",
            description: "This product has no available sizes.",
            variant: "destructive"
        })
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50">
      <Link href={`/shop/${product.id}`} className="block">
        <Image
          src={product.images[0]}
          alt={product.name}
          data-ai-hint="woman office wear"
          width={600}
          height={800}
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button 
          size="icon" 
          variant="ghost" 
          className="h-9 w-9 rounded-full bg-background/80 text-foreground backdrop-blur-sm hover:bg-background"
          onClick={handleWishlistToggle}
        >
          <Heart className={cn("h-4 w-4", isItemWishlisted && "fill-red-500 text-red-500")} />
          <span className="sr-only">Wishlist</span>
        </Button>
      </div>

      <div className="p-4 bg-card">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-medium text-base text-foreground">
              <Link href={`/shop/${product.id}`} className="hover:text-primary/80 transition-colors">{product.name}</Link>
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <p className="text-base font-semibold text-foreground">₹{product.price.toLocaleString('en-IN')}</p>
            </div>
          </div>
          <Button 
            size="icon" 
            className="h-10 w-10 flex-shrink-0 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            aria-label="Add to Bag"
            onClick={handleAddToCart}
          >
            <Plus className="h-5 w-5" />
            <span className="sr-only">Add to Bag</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
