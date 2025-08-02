import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <Card>
        <CardContent className="p-8 space-y-6 text-muted-foreground">
          <p>This is a placeholder Terms of Service for BaeBow. In a real application, this page would outline the rules and regulations for the use of BaeBow's website.</p>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
            <p>By accessing our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by these terms and conditions. These terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">2. Products or Services</h2>
            <p>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. We reserve the right to limit the quantities of any products or services that we offer.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">3. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of BaeBow and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>
          </div>
          
           <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">4. Governing Law</h2>
            <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India.</p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
