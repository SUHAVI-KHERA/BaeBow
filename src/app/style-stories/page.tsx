import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/data";

export default function StyleStoriesPage() {
  const videos = products.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Style Stories</h1>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Watch how our pieces come to life. Short, 15-second videos to inspire your next great look.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card key={video.id}>
            <CardContent className="p-4">
              <div className="aspect-w-9 aspect-h-16 overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeVideoId}`}
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
              <h3 className="mt-4 font-headline text-xl font-semibold">{video.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
