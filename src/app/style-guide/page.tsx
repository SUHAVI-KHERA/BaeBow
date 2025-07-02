import { StyleAssistantForm } from "./StyleAssistantForm";

export default function StyleGuidePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-normal tracking-tight sm:text-5xl">AI-Powered Style Assistant</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Unsure what to wear? Fill out the form below and let our AI stylist create the perfect outfit recommendation for you.
        </p>
      </div>
      <StyleAssistantForm />
    </div>
  );
}
