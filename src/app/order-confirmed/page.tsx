import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OrderConfirmedPage() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 md:px-6">
      <Card className="w-full max-w-lg text-center">
        <CardContent className="p-10">
          <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />
          <h1 className="mt-6 font-headline text-4xl font-normal">Thank You!</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Your order has been placed successfully.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            (This is a simulated order confirmation.)
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
