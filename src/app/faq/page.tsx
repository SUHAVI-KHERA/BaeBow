import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What makes BaeBow different from other brands?",
        answer: "BaeBow is designed specifically for the Indian woman's body and our climate. We focus on 'real-world' solutions like anti-sweat technology, adaptive fits for curves, and comfortable tummy control, so you don't have to compromise between style and comfort."
    },
    {
        question: "How do I find my correct size?",
        answer: "We recommend checking the size chart available on each product page. Our adaptive-fit technology allows for some flexibility, but the chart will give you the most accurate measurements for the best fit."
    },
    {
        question: "What is your return and exchange policy?",
        answer: "We offer a 15-day hassle-free return and exchange policy. Items must be in their original condition, unworn, and with all tags attached. Please visit our Shipping & Returns page for more details."
    },
    {
        question: "How should I care for my BaeBow garments?",
        answer: "Most of our garments are designed for easy care. We recommend a gentle machine wash in cold water. For specific items like our silk blouses, please refer to the care label on the garment for detailed instructions."
    },
    {
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within India. We are working on expanding our reach and hope to offer international shipping in the future."
    }
]

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Have questions? We have answers.
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
             <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>

    </div>
  );
}
