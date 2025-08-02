import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Undo2 } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Shipping & Returns</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Everything you need to know about getting your BaeBow order and what to do if it's not quite right.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Truck className="h-10 w-10 text-primary" />
            <CardTitle>Shipping</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>We offer complimentary standard shipping on all orders across India.</p>
            <p>Standard shipping typically takes 5-7 business days to arrive.</p>
            <p>Once your order is shipped, you will receive a tracking number via email to follow your package's journey.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Undo2 className="h-10 w-10 text-primary" />
            <CardTitle>Returns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>We offer a hassle-free 15-day return policy from the date of delivery.</p>
            <p>To be eligible for a return, your item must be unused, in the same condition that you received it, and with all original tags attached.</p>
            <p>To initiate a return, please visit our contact page and get in touch with our support team.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Package className="h-10 w-10 text-primary" />
            <CardTitle>Exchanges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Need a different size or color? We are happy to process exchanges within the 15-day return window.</p>
            <p>Exchanges are subject to availability. If your desired item is not in stock, we will issue a store credit or a full refund.</p>
             <p>The first exchange is on us! We'll cover the shipping costs to make sure you get the perfect fit.</p>
          </CardContent>
        </Card>
      </div>
       <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>Please note: This is a sample policy for demonstration purposes.</p>
        </div>
    </div>
  );
}
