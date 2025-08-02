"use client"
import Link from 'next/link';

export function AnimatedShopNow() {
  return (
    <Link href="/shop" className="group inline-block text-lg font-light tracking-wider text-white">
      Shop Now
      <svg className="mt-1" width="80" height="10" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 H 100" stroke="white" strokeWidth="1" className="draw-arrow" />
      </svg>
    </Link>
  );
}
