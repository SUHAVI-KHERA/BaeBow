import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">From Her Eyes</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Real stories from the inspiring women who wear BaeBow.
        </p>
      </div>

      {/* TODO: Add filter component here */}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  data-ai-hint="woman portrait"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-headline text-xl font-semibold">{testimonial.name}</h3>
                  <div className="text-sm text-muted-foreground">{testimonial.ageGroup}</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                {testimonial.quote}
              </blockquote>
              <Badge variant="outline" className="mt-4">Concern: {testimonial.concern}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
