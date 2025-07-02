import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
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
