export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  details: string[];
  sizes: string[];
  styleTags: string[];
  category: string;
  youtubeVideoId: string;
};

export type Testimonial = {
  id: string;
  name: string;
  ageGroup: string;
  concern: string;
  quote: string;
  image: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  tags: string[];
  date: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
};
