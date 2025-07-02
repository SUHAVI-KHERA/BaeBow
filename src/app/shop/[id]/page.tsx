import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AddToCartForm } from "./AddToCartForm";
import { QrCode } from "./QrCode";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Carousel>
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image}
                    alt={`${product.name} - view ${index + 1}`}
                    data-ai-hint="woman office wear"
                    width={600}
                    height={800}
                    className="aspect-[3/4] w-full rounded-lg object-cover shadow-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-normal">{product.name}</h1>
          <p className="text-3xl font-semibold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
          <div className="flex flex-wrap gap-2">
            {product.styleTags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <p className="text-lg text-muted-foreground">{product.description}</p>
          
          <AddToCartForm product={product} />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details">
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="styling-video">
              <AccordionTrigger>Styling Video</AccordionTrigger>
              <AccordionContent>
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${product.youtubeVideoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full rounded-lg"
                  ></iframe>
                </div>
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="qr-code">
              <AccordionTrigger>Offline Styling Guide</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-4">
                   <QrCode value={`${process.env.NEXT_PUBLIC_BASE_URL}/shop/${product.id}`} />
                  <div>
                    <p className="font-semibold">Scan for Style on the Go</p>
                    <p className="text-sm text-muted-foreground">Scan this QR code with your phone to access this page anytime, anywhere.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
