"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Image from "next/image";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(10, "Address is too short"),
  city: z.string().min(2, "City is required"),
  pincode: z.string().regex(/^\d{6}$/, "Invalid pincode"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, totalPrice, clearCart } = useCart();
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { name: "", email: "", address: "", city: "", pincode: "" },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Simulated order submitted:", data);
    clearCart();
    router.push("/order-confirmed");
  };

  if (cartItems.length === 0) {
     return (
        <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="mt-8 font-headline text-4xl font-bold">Your Cart is Empty</h1>
            <p className="mt-4 text-lg text-muted-foreground">You can't checkout without any items.</p>
            <Button asChild className="mt-8" size="lg">
                <Link href="/shop">Start Shopping</Link>
            </Button>
        </div>
     );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <h1 className="mb-8 text-center font-headline text-4xl font-bold">Checkout</h1>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl><Input placeholder="123, Main Street" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField control={form.control} name="city" render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl><Input placeholder="Mumbai" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="pincode" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl><Input placeholder="400001" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Place Order (Simulated)</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image src={item.image} alt={item.name} width={60} height={80} className="rounded-md" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                </div>
              ))}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between font-semibold">
                  <p>Total</p>
                  <p>₹{totalPrice.toLocaleString('en-IN')}</p>
                </div>
                <p className="text-sm text-muted-foreground text-center">This is a simulated checkout. No payment will be processed.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
