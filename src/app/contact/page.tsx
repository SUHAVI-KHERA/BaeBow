import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-normal tracking-tight sm:text-5xl">Get in Touch</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          We'd love to hear from you. Whether you have a question about our products, styling, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2.9A10.33 10.33 0 0 1 21.07 10a10.33 10.33 0 0 1-7.02 7.07"></path></svg>
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp Stylist</h3>
                <p className="text-muted-foreground">Chat with us for instant styling advice.</p>
                <Button variant="link" asChild className="p-0 h-auto">
                  <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
                </Button>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-muted-foreground">For general inquiries and support.</p>
                <a href="mailto:hello@baebow.com" className="text-primary hover:underline">hello@baebow.com</a>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-muted-foreground">Mon - Fri, 9am - 6pm IST</p>
                <a href="tel:+911234567890" className="text-primary hover:underline">+91 123 456 7890</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
