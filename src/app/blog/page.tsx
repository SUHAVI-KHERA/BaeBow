import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">BaeBow Blog</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Your source for styling tips, fashion insights, and stories of confidence.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                data-ai-hint="fashion flatlay"
                width={800}
                height={600}
                className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
              <CardTitle className="mt-4 font-headline text-2xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="pl-0">
                <Link href={`/blog/${post.slug}`}>Read More →</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
