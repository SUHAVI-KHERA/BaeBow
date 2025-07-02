import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="py-12 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center flex-wrap gap-2 mb-4">
            {post.tags.map(tag => <Badge key={tag} variant="default">{tag}</Badge>)}
          </div>
          <h1 className="font-headline text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">{post.title}</h1>
          <p className="mt-4 text-muted-foreground">Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </header>
      
      <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <Image
          src={post.image}
          alt={post.title}
          data-ai-hint="fashion flatlay"
          width={1200}
          height={675}
          className="w-full rounded-lg shadow-lg"
        />

        <div className="prose prose-lg max-w-none mx-auto mt-12 space-y-6 text-foreground/90">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
