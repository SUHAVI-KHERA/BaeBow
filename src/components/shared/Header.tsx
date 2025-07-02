"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, ShoppingBag, Heart } from "lucide-react";
import { useCart } from "@/context/CartProvider";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/style-guide", label: "Style Guide" },
  { href: "/style-stories", label: "Style Stories" },
  { href: "/testimonials", label: "From Her Eyes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { cartCount } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center">
          <span className="font-headline text-3xl font-bold text-primary">BaeBow</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              {isClient && cartCount > 0 && (
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary ring-2 ring-background"></span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <div className="flex items-center justify-between">
                 <Link href="/" className="flex items-center">
                   <span className="font-headline text-3xl font-bold text-primary">BaeBow</span>
                 </Link>
                 <SheetClose asChild>
                   <Button variant="ghost" size="icon" className="md:hidden">
                      <span className="sr-only">Close</span>
                   </Button>
                 </SheetClose>
               </div>
              <div className="mt-6 grid gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link href={link.href} className="text-lg font-medium transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
