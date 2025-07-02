import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function CapsuleCollectionPage() {
  const capsuleItems = products.slice(0, 5);
  
  return (
    <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
            <div className="mb-12 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">The Capsule Collection</h1>
                <p className="mt-3 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                The art of a minimalist wardrobe. We believe in "fewer, better things". A capsule collection is a curated set of essential, versatile items that can be mixed and matched to create numerous outfits.
                </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold">5 Items <ArrowRight className="inline-block h-8 w-8 text-primary" /> 12+ Looks</h2>
                    <p className="text-muted-foreground">
                        Our featured capsule includes five foundational pieces that are designed to work seamlessly together. From a critical board meeting to a casual brunch, these items provide a complete, stylish wardrobe for the modern professional. Simplify your life, reduce decision fatigue, and always look impeccable.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><span className="font-semibold text-foreground">The Unstoppable Trousers:</span> The perfect base for any look.</li>
                        <li><span className="font-semibold text-foreground">The Poise Silk Blouse:</span> Adds a touch of elegance.</li>
                        <li><span className="font-semibold text-foreground">The Visionary Blazer:</span> For instant sophistication.</li>
                        <li><span className="font-semibold text-foreground">The Convertible Skirt:</span> From formal to casual.</li>
                        <li><span className="font-semibold text-foreground">The Essential Knit Top:</span> The ultimate layering piece.</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {capsuleItems.slice(0, 3).map(item => (
                         <div key={item.id} className="rounded-lg overflow-hidden shadow-md">
                             <img src={item.images[0]} alt={item.name} className="w-full h-auto object-cover aspect-[3/4]" data-ai-hint="fashion item"/>
                         </div>
                    ))}
                    <div className="col-span-2 md:col-span-3 grid grid-cols-2 gap-4">
                         {capsuleItems.slice(3, 5).map(item => (
                             <div key={item.id} className="rounded-lg overflow-hidden shadow-md">
                                 <img src={item.images[0]} alt={item.name} className="w-full h-auto object-cover aspect-[3/4]" data-ai-hint="fashion item"/>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
