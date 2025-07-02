"use client";

import { useCart } from "@/context/CartProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center text-center">
        <ShoppingBag className="h-24 w-24 text-muted-foreground" />
        <h1 className="mt-8 font-headline text-4xl font-bold">Your Cart is Empty</h1>
        <p className="mt-4 text-lg text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {cartItems.map((item) => (
            <Card key={`${item.id}-${item.size}`} className="overflow-hidden">
              <CardContent className="flex items-center gap-6 p-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  data-ai-hint="woman office wear"
                  width={100}
                  height={133}
                  className="rounded-md object-cover"
                />
                <div className="flex-grow space-y-2">
                  <h2 className="font-headline text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                  <p className="text-lg font-bold text-primary">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-md border">
                    <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, item.size, parseInt(e.target.value) || 1)}
                      className="h-9 w-14 border-0 text-center shadow-none focus-visible:ring-0"
                    />
                    <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id, item.size)}>
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="space-y-6 p-6">
              <h2 className="font-headline text-2xl font-bold">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="flex justify-between border-t pt-4 text-xl font-bold">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
