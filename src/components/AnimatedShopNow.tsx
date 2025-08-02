"use client"
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export function AnimatedShopNow() {
  return (
    <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300 group">
      <Link href="/shop">
        Shop Now
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
