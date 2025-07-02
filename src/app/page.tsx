import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";
import { ArrowRight, QrCode, ShieldCheck, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-accent/30">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2 md:px-6 lg:gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-normal tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Confidence in Every Curve
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              BaeBow offers stylish, comfortable, and body-inclusive western officewear designed for the modern Indian woman.
            </p>
            <Button asChild size="lg">
              <Link href="/shop">
                Shop The Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <Image
            src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            data-ai-hint="woman office wear"
            alt="Confident woman in BaeBow officewear"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Featured Collection */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-normal tracking-tight sm:text-4xl">Featured Collection</h2>
            <p className="mt-2 text-muted-foreground">Discover our handpicked selection of must-have styles.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Real Problems, Real Solutions Section */}
      <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-normal tracking-tight md:text-4xl/tight">Real Problems, Real Solutions</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We design clothes that solve real-world wardrobe challenges for Indian women.
            </p>
          </div>
          <div className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <Card className="text-left">
              <CardContent className="p-6">
                <ShieldCheck className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 font-headline text-xl font-bold">Anti-Sweat Tech</h3>
                <p className="text-muted-foreground">Stay cool and confident with our breathable, moisture-wicking fabrics, perfect for the Indian climate.</p>
              </CardContent>
            </Card>
            <Card className="text-left">
              <CardContent className="p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 h-10 w-10 text-primary"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m10.5 9.5 3 3 3-3"/><path d="m10.5 14.5 3-3 3 3"/></svg>
                <h3 className="mb-2 font-headline text-xl font-bold">Adaptive Fit</h3>
                <p className="text-muted-foreground">Our designs incorporate smart stretching and adjustable features for a perfect fit that moves with you.</p>
              </CardContent>
            </Card>
            <Card className="text-left">
              <CardContent className="p-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 h-10 w-10 text-primary"><path d="M12 2c-3 0-5 2-5 5v2H5.5C4.67 9 4 9.67 4 10.5V20c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5V10.5c0-.83-.67-1.5-1.5-1.5H17V7c0-3-2-5-5-5z"/><path d="M9 14.12V15a3 3 0 0 0 6 0v-.88"/></svg>
                <h3 className="mb-2 font-headline text-xl font-bold">Tummy Control</h3>
                <p className="text-muted-foreground">Feel your best with discretely integrated panels and cuts that provide gentle, comfortable support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* QR Tag + Video Feature Highlight */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <Image
            src="https://images.pexels.com/photos/7148633/pexels-photo-7148633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            data-ai-hint="phone scanning qrcode"
            alt="Phone scanning a QR code on a clothing tag"
            width={600}
            height={400}
            className="mx-auto overflow-hidden rounded-xl object-cover"
          />
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">Beyond the Hanger</div>
            <h2 className="font-headline text-3xl font-normal tracking-tight sm:text-4xl">Unlock Your Style Potential</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Every BaeBow piece comes with a unique QR tag. Scan it to access exclusive 15-second video guides, showing you how to style your new outfit for any occasion.
            </p>
            <ul className="grid gap-4">
              <li className="flex items-start gap-4">
                <QrCode className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Scan the Tag</h3>
                  <p className="text-muted-foreground">Use your phone's camera to scan the QR code on the garment's label.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Video className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Watch & Learn</h3>
                  <p className="text-muted-foreground">Instantly watch short, professional styling videos for your specific item.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
