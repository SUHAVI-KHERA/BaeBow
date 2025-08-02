import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";
import { ArrowRight, QrCode, ShieldCheck, Video, Sparkles, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { AnimatedShopNow } from "@/components/AnimatedShopNow";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://videos.pexels.com/video-files/8004550/8004550-hd_1920_1080_25fps.mp4"
          poster="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-thin tracking-widest uppercase fade-in" style={{ animationDelay: '0.2s' }}>
            BaeBow
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl font-light text-foreground/80 fade-in" style={{ animationDelay: '0.4s' }}>
            Confidence in Every Curve
          </p>
          <div className="mt-8 fade-in" style={{ animationDelay: '0.6s' }}>
            <AnimatedShopNow />
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Featured Collection</h2>
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
      <section className="w-full bg-secondary/30 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-light tracking-tight md:text-4xl/tight">Real Problems, Real Solutions</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We design clothes that solve real-world wardrobe challenges for Indian women.
            </p>
          </div>
          <div className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <Card className="text-left bg-transparent border-muted-foreground/20">
              <CardContent className="p-6">
                <ShieldCheck className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Anti-Sweat Tech</h3>
                <p className="text-muted-foreground">Stay cool and confident with our breathable, moisture-wicking fabrics, perfect for the Indian climate.</p>
              </CardContent>
            </Card>
            <Card className="text-left bg-transparent border-muted-foreground/20">
              <CardContent className="p-6">
                <Sparkles className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Adaptive Fit</h3>
                <p className="text-muted-foreground">Our designs incorporate smart stretching and adjustable features for a perfect fit that moves with you.</p>
              </CardContent>
            </Card>
            <Card className="text-left bg-transparent border-muted-foreground/20">
              <CardContent className="p-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 h-10 w-10 text-primary"><path d="M12 2c-3 0-5 2-5 5v2H5.5C4.67 9 4 9.67 4 10.5V20c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5V10.5c0-.83-.67-1.5-1.5-1.5H17V7c0-3-2-5-5-5z"/><path d="M9 14.12V15a3 3 0 0 0 6 0v-.88"/></svg>
                <h3 className="mb-2 text-xl font-semibold">Tummy Control</h3>
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
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Beyond the Hanger</div>
            <h2 className="text-3xl font-light tracking-tight sm:text-4xl">Unlock Your Style Potential</h2>
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
