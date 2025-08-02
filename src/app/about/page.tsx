import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">About BaeBow</h1>
        <p className="mt-3 max-w-3xl mx-auto text-muted-foreground md:text-lg">
          Confidence in Every Curve.
        </p>
      </div>

      <Card className="overflow-hidden">
        <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team behind BaeBow"
            data-ai-hint="team work"
            width={1200}
            height={500}
            className="w-full h-[300px] object-cover"
        />
        <CardContent className="p-8 space-y-6">
            <p className="text-lg text-foreground/90">
            BaeBow was born from a simple yet powerful idea: that every woman deserves to feel confident and comfortable in her clothes, especially in the workplace. For too long, Indian women have had to choose between style and comfort, between western wear that doesn’t fit our bodies and traditional wear that isn’t always practical for the modern office.
            </p>
            <p className="text-muted-foreground">
            We started BaeBow to bridge that gap. We obsess over the details—fabric that breathes in the Indian climate, cuts that flatter our diverse body shapes, and smart features like our adaptive-fit technology and tummy-control panels. Our mission is to create officewear that empowers you, that moves with you, and that makes you feel like the best version of yourself, every single day.
            </p>
            <p className="text-muted-foreground">
            We are more than just a clothing brand. We are a community of strong, ambitious women who are redefining what it means to be a professional in modern India. Thank you for being a part of our journey.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
