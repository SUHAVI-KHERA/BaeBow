"use client";

import { useWishlist } from "@/context/WishlistProvider";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartProvider";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/types";

function WishlistItem({ product }: { product: Product }) {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
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
    }
  };

  return (
    <div className="flex items-center gap-6 border-b py-6">
      <Link href={`/shop/${product.id}`} className="flex-shrink-0">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={120}
          height={160}
          className="rounded-lg object-cover"
        />
      </Link>
      <div className="flex-grow space-y-2">
        <Link href={`/shop/${product.id}`}>
          <h2 className="font-headline text-xl font-semibold hover:text-primary">{product.name}</h2>
        </Link>
        <p className="text-lg font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
        <div className="flex gap-2">
          <Button onClick={handleAddToCart}>Add to Bag</Button>
          <Button variant="ghost" size="icon" onClick={() => removeFromWishlist(product.id)}>
            <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive" />
          </Button>
        </div>
      </div>
    </div>
  );
}

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
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Your Wishlist</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Your curated collection of future favorites. Ready to make them yours?
        </p>
      </div>

      <div>
        {wishlistedProducts.map((product) => (
          <WishlistItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
