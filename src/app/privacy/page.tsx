import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <Card>
        <CardContent className="p-8 space-y-6 text-muted-foreground">
          <p>This is a placeholder Privacy Policy for BaeBow. In a real application, this page would detail how user data is collected, used, and protected.</p>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
            <p>We would typically collect information such as your name, email address, shipping address, and payment information when you place an order. We may also collect data through cookies to improve your browsing experience.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>Your information is used to process transactions, provide customer service, and improve our products and services. With your permission, we may also send you promotional emails about new products or special offers.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
            <p>We would implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.</p>
          </div>
          
           <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Your Rights</h2>
            <p>You would have the right to access, correct, or delete your personal information at any time. Please contact us to make such a request.</p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
