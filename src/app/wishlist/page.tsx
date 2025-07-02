"use client";

import { useWishlist } from "@/context/WishlistProvider";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();
  const wishlistedProducts = products.filter(p => wishlistItems.includes(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center text-center">
        <Heart className="h-24 w-24 text-muted-foreground" />
        <h1 className="mt-8 font-headline text-4xl font-bold">Your Wishlist is Empty</h1>
        <p className="mt-4 text-lg text-muted-foreground">Looks like you haven't added anything to your wishlist yet.</p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Your Wishlist</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Your curated collection of future favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlistedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
