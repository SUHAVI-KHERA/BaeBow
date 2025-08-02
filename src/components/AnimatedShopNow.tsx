"use client"
import Link from 'next/link';

export function AnimatedShopNow() {
  return (
    <Link href="/shop" className="group inline-block text-lg font-light tracking-wider text-white">
      <div className="relative overflow-hidden">
        <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">Shop Now</span>
        <span className="absolute left-0 block transition-transform duration-500 ease-in-out group-hover:translate-y-0 translate-y-full">Shop Now</span>
      </div>
      <svg className="mt-1" width="80" height="10" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 H 100" stroke="white" strokeWidth="1" className="draw-arrow" />
      </svg>
    </Link>
  );
}
