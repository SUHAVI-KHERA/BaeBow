"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  StyleRecommendationInput,
  StyleRecommendationOutput,
  recommendStyle,
} from "@/ai/flows/style-recommendation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const styleFormSchema = z.object({
  occasion: z.string().min(1, "Occasion is required"),
  colorPreference: z.string().min(1, "Color preference is required"),
  bodyType: z.string().min(1, "Body type is required"),
  stylePreference: z.string().min(1, "Style preference is required"),
});

export function StyleAssistantForm() {
  const [recommendation, setRecommendation] = useState<StyleRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<StyleRecommendationInput>({
    resolver: zodResolver(styleFormSchema),
    defaultValues: {
      occasion: "",
      colorPreference: "",
      bodyType: "",
      stylePreference: "",
    },
  });

  const onSubmit = async (data: StyleRecommendationInput) => {
    setIsLoading(true);
    setRecommendation(null);
    setError(null);
    try {
      const result = await recommendStyle(data);
      setRecommendation(result);
    } catch (e) {
      setError("Sorry, we couldn't generate a recommendation at this time. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField control={form.control} name="occasion" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occasion</FormLabel>
                     <FormControl><Input placeholder="e.g., Office party, Casual Friday" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                 <FormField control={form.control} name="colorPreference" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Color Preference</FormLabel>
                     <FormControl><Input placeholder="e.g., Navy, Pastels, Earth tones" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="bodyType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select your body type" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Pear-shaped">Pear-shaped</SelectItem>
                        <SelectItem value="Apple-shaped">Apple-shaped</SelectItem>
                        <SelectItem value="Hourglass">Hourglass</SelectItem>
                        <SelectItem value="Rectangle">Rectangle</SelectItem>
                        <SelectItem value="Inverted Triangle">Inverted Triangle</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
                 <FormField control={form.control} name="stylePreference" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Style Preference</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select your preferred style" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Modern">Modern</SelectItem>
                        <SelectItem value="Elegant">Elegant</SelectItem>
                        <SelectItem value="Classic">Classic</SelectItem>
                        <SelectItem value="Minimalist">Minimalist</SelectItem>
                        <SelectItem value="Bohemian">Bohemian</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Get Recommendation"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
         <Card className="animate-pulse">
            <CardHeader><CardTitle className="h-6 w-1/3 rounded-md bg-muted"></CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <div className="h-4 w-full rounded-md bg-muted"></div>
                <div className="h-4 w-5/6 rounded-md bg-muted"></div>
                 <div className="h-4 w-full rounded-md bg-muted mt-4"></div>
                 <div className="h-4 w-4/6 rounded-md bg-muted"></div>
            </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-destructive">
          <CardHeader><CardTitle>Error</CardTitle></CardHeader>
          <CardContent><p className="text-destructive">{error}</p></CardContent>
        </Card>
      )}

      {recommendation && (
        <Card className="bg-accent/20">
          <CardHeader>
            <CardTitle className="font-headline">Your Personalized Recommendation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Recommended Outfit:</h3>
              <p className="text-muted-foreground">{recommendation.recommendation}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Why it works for you:</h3>
              <p className="text-muted-foreground">{recommendation.reasoning}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
