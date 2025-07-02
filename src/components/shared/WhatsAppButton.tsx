"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WhatsAppButton() {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "911234567890";
  const message = "Hello! I have a question about styling.";

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
      style={{ backgroundColor: '#25D366' }}
    >
      <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2.9A10.33 10.33 0 0 1 21.07 10a10.33 10.33 0 0 1-7.02 7.07"></path></svg>
        <span className="sr-only">Chat on WhatsApp</span>
      </Link>
    </Button>
  );
}
