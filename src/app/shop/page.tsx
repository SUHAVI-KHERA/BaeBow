import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Our Collection</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Explore our thoughtfully designed pieces, crafted for comfort, style, and confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* TODO: Add filter component here */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
