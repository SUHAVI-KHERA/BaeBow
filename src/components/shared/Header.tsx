
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, ShoppingBag, Heart } from "lucide-react";
import { useCart } from "@/context/CartProvider";
import { useWishlist } from "@/context/WishlistProvider";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/style-guide", label: "Style Guide" },
  { href: "/style-stories", label: "Style Stories" },
  { href: "/testimonials", label: "From Her Eyes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function HeaderIcons() {
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <Button variant="ghost" size="icon" asChild className="relative">
                <Link href="/wishlist">
                    <Heart className="h-5 w-5" />
                    {isClient && wishlistCount > 0 && (
                        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary ring-2 ring-background"></span>
                    )}
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
                <SheetContent side="left" className="bg-background">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center">
                            <Logo textClassName="text-3xl" />
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
                                <Link href={link.href} className="text-lg font-medium transition-colors hover:text-primary/80">
                                    {link.label}
                                </Link>
                            </SheetClose>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}


export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center">
          <Logo textClassName="text-3xl" />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary/80">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <HeaderIcons />
        </div>
      </div>
    </header>
  );
}
