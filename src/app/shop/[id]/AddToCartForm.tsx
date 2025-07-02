"use client";

import { useState } from "react";
import { useCart } from "@/context/CartProvider";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/types";
import { ShoppingBag } from "lucide-react";

export function AddToCartForm({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes[0] || null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
    });

    toast({
      title: "Added to Cart!",
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  return (
    <div className="space-y-6 rounded-lg border bg-card p-6">
      <div>
        <Label className="text-lg font-medium">Select Size</Label>
        <RadioGroup
          value={selectedSize ?? ""}
          onValueChange={setSelectedSize}
          className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-5"
        >
          {product.sizes.map((size) => (
            <div key={size}>
              <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
              <Label
                htmlFor={`size-${size}`}
                className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover text-base hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
              >
                {size}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Button size="lg" className="w-full" onClick={handleAddToCart}>
        <ShoppingBag className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  );
}
