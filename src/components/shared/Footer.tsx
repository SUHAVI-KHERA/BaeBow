import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Pinterest", href: "#" },
];

const footerLinks = [
  { title: "Company", links: [{ name: "About Us", href: "#" }, { name: "Blog", href: "/blog" }, { name: "Testimonials", href: "/testimonials" }] },
  { title: "Support", links: [{ name: "Contact Us", href: "/contact" }, { name: "FAQs", href: "#" }, { name: "Shipping & Returns", href: "#" }] },
  { title: "Legal", links: [{ name: "Privacy Policy", href: "#" }, { name: "Terms of Service", href: "#" }] },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/30">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center">
            <span className="font-headline text-2xl font-bold text-accent">BaeBow</span>
          </Link>
          <p className="text-sm text-muted-foreground">Confidence in Every Curve.</p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
               <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
                 <span className="sr-only">{social.name}</span>
                 {/* Placeholder for actual icons */}
                 <div className="h-6 w-6 rounded-full bg-gray-300" />
               </Link>
            ))}
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="grid gap-2">
            <h3 className="font-headline text-lg font-semibold">{section.title}</h3>
            {section.links.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>
        ))}

        <div className="grid gap-4 md:col-span-1">
          <h3 className="font-headline text-lg font-semibold">Stay in Touch</h3>
          <p className="text-sm text-muted-foreground">Subscribe to our newsletter for exclusive offers and styling tips.</p>
          <form className="flex space-x-2">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/40 py-6">
        <div className="container mx-auto flex max-w-7xl items-center justify-center px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} BaeBow. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
