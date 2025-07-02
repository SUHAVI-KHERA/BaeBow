import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Award, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RewardsPage() {
  return (
    <div className="bg-accent/20">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Circular Fashion Rewards</h1>
          <p className="mt-3 max-w-3xl mx-auto text-muted-foreground md:text-lg">
            Join us in building a more sustainable future for fashion. Your pre-loved BaeBow pieces have value beyond their first life.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center font-headline text-3xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-12 p-8 md:grid-cols-3">
            <div className="text-center flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Recycle className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">1. Return</h3>
              <p className="text-muted-foreground">Once you're ready to part with your BaeBow items, send them back to us. We'll handle the rest.</p>
            </div>
            <div className="text-center flex flex-col items-center">
               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">2. Earn Credit</h3>
              <p className="text-muted-foreground">We'll assess the item and issue you store credit based on its condition. Give your clothes a second life and get rewarded for it.</p>
            </div>
            <div className="text-center flex flex-col items-center">
               <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">3. Shop Anew</h3>
              <p className="text-muted-foreground">Use your credits to invest in new, timeless pieces for your wardrobe. It's style that's good for your wallet and the planet.</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">(This is a simulated rewards program for demonstration purposes.)</p>
            <Button size="lg" asChild>
                <Link href="/contact">Learn More & Start a Return</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
