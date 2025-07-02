import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/shop/${product.id}`}>
        <CardContent className="p-0">
          <div className="aspect-[3/4] overflow-hidden">
             <Image
              src={product.images[0]}
              alt={product.name}
              data-ai-hint="woman office wear"
              width={600}
              height={800}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="truncate font-headline text-lg font-semibold">{product.name}</h3>
            <p className="mt-2 text-base font-semibold text-muted-foreground">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
          </div>
        </CardContent>
      </Link>
       <div className="border-t px-4 py-3">
          <Button asChild className="w-full">
             <Link href={`/shop/${product.id}`}>View Details</Link>
          </Button>
        </div>
    </Card>
  );
}
