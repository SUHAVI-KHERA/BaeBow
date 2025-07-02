import type { Product, Testimonial, BlogPost } from './types';

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'The Executive Sheath Dress',
    price: 4999,
    images: [
      'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800', 
      'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=800', 
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'A meticulously tailored dress that combines power and elegance. Its adaptive-fit fabric ensures comfort through long meetings and demanding days.',
    details: [
      'Adaptive-fit stretch cotton blend',
      'Discreet side zipper',
      'Wrinkle-resistant technology',
      'Knee-length for professional settings'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    styleTags: ['Tummy Control', 'Adaptive-Fit', 'Power-Dressing'],
    category: 'Dresses',
    youtubeVideoId: 'ysz5S6PUM-U',
  },
  {
    id: 'prod_002',
    name: 'The Unstoppable Trousers',
    price: 3499,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800', 
      'https://images.pexels.com/photos/5439427/pexels-photo-5439427.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-waisted trousers designed for the woman on the move. Features our signature tummy-control waistband and anti-sweat fabric.',
    details: [
      'Anti-sweat breathable fabric',
      'Four-way stretch for maximum mobility',
      'High-waist with comfort tummy panel',
      'Two functional side pockets'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    styleTags: ['Tummy Control', 'Anti-Sweat', 'Stretch Fit'],
    category: 'Trousers',
    youtubeVideoId: 'ysz5S6PUM-U',
  },
  {
    id: 'prod_003',
    name: 'The Visionary Blazer',
    price: 5999,
    images: ['https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'A modern take on the classic blazer. Lightweight yet structured, it adds a layer of sophistication to any outfit without adding bulk.',
    details: [
      'Lightweight, breathable wool-blend',
      'Single-button closure',
      'Slightly padded shoulders for structure',
      'Satin-lined interior'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    styleTags: ['Power-Dressing', 'Layering-Piece'],
    category: 'Blazers',
    youtubeVideoId: 'ysz5S6PUM-U',
  },
  {
    id: 'prod_004',
    name: 'The Poise Silk Blouse',
    price: 2999,
    images: [
      'https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=800', 
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Effortlessly elegant, this silk blouse drapes beautifully to flatter every curve. The perfect piece to transition from desk to dinner.',
    details: [
      '100% Mulberry Silk (washable)',
      'Relaxed fit with concealed button placket',
      'Long sleeves with buttoned cuffs',
      'Designed to be worn tucked or untucked'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    styleTags: ['Elegant', 'Desk-to-Dinner', 'Natural-Fabric'],
    category: 'Tops',
    youtubeVideoId: 'ysz5S6PUM-U',
  },
   {
    id: 'prod_005',
    name: 'The Convertible A-Line Skirt',
    price: 3899,
    images: ['https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Versatility at its finest. This A-line skirt offers a flattering silhouette with a comfortable elasticated back waistband.',
    details: [
      'Crepe fabric with a beautiful drape',
      'Midi-length for versatile styling',
      'Side seam pockets',
      'Elasticated back for comfort'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    styleTags: ['Convertible', 'Adaptive-Fit', 'Elegant'],
    category: 'Skirts',
    youtubeVideoId: 'ysz5S6PUM-U',
  },
  {
    id: 'prod_006',
    name: 'The Everyday Essential Knit Top',
    price: 2499,
    images: ['https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'The foundational piece your wardrobe needs. Made from a super-soft, breathable knit that feels like a second skin.',
    details: [
      'Premium Supima cotton-modal blend',
      'Excellent stretch and recovery',
      'Crew neck and elbow-length sleeves',
      'Perfect for layering or on its own'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    styleTags: ['Stretch Fit', 'Layering-Piece', 'Natural-Fabric'],
    category: 'Tops',
    youtubeVideoId: 'ysz5S6PUM-U',
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test_001',
    name: 'Priya Sharma',
    ageGroup: '40-50',
    concern: 'Tummy Issues',
    quote: "BaeBow's trousers are a game-changer. The tummy control is so comfortable and discreet, I feel confident and supported all day. It's the first time I've felt truly good in office pants.",
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'test_002',
    name: 'Anjali Mehta',
    ageGroup: '30-40',
    concern: 'Arm Coverage',
    quote: "I used to struggle finding blouses with the right arm coverage that didn't look frumpy. The Poise Silk Blouse is perfect - elegant, stylish, and makes me feel so put-together.",
    image: 'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'test_003',
    name: 'Sunita Rao',
    ageGroup: '40-50',
    concern: 'Finding a Good Fit',
    quote: "As someone with a pear-shaped body, finding clothes that fit both my waist and hips is a nightmare. The adaptive-fit in the Executive Dress is genius. It fits like it was made for me.",
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post_001',
    slug: '5-items-12-looks',
    title: 'The Ultimate Capsule Wardrobe: 5 Items, 12 Looks',
    excerpt: 'Simplify your mornings and elevate your style. Discover how five core BaeBow pieces can be mixed and matched to create twelve stunning office-ready outfits.',
    image: 'https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Capsule Wardrobe', 'Styling Tips', 'Officewear'],
    date: '2024-05-15',
    content: [
      "In a world of endless choice, simplicity is the ultimate luxury. A capsule wardrobe is the secret to looking effortlessly chic without the morning stress. It's about investing in high-quality, versatile pieces that you can wear in multiple ways. At BaeBow, we design our clothes with this philosophy in mind.",
      "Today, we're showing you how to build a powerful work wardrobe with just five key items: The Unstoppable Trousers, The Poise Silk Blouse, The Visionary Blazer, The Convertible A-Line Skirt, and The Everyday Essential Knit Top. These pieces form the foundation for a dozen distinct, professional looks.",
      "Look 1: The Power Suit. Pair The Unstoppable Trousers with The Visionary Blazer and the Knit Top for a classic, commanding presence. Perfect for that big presentation.",
      "Look 2: Effortless Elegance. Combine The Convertible A-Line Skirt with The Poise Silk Blouse. This look is soft, feminine, and perfect for client meetings."
    ]
  },
  {
    id: 'post_002',
    slug: 'desk-to-dinner-styling',
    title: 'From Desk to Dinner: Styling Your Look in 5 Minutes',
    excerpt: 'Your workday is done, but your day isn’t. Learn our top tips for quickly transitioning your office attire into a sophisticated evening look.',
    image: 'https://images.pexels.com/photos/374845/pexels-photo-374845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Styling Tips', 'Desk-to-Dinner'],
    date: '2024-05-22',
    content: [
      "The modern woman's day rarely ends at 5 PM. Whether it's a dinner with clients, a catch-up with friends, or a cultural event, you need an outfit that can keep up. The key is in the details and a few smart swaps.",
      "Start with a great base, like our Executive Sheath Dress. During the day, wear it with The Visionary Blazer. For the evening, simply remove the blazer, add a statement necklace, swap your work tote for a clutch, and touch up your lipstick. You're ready in under five minutes.",
      "Another great tip is to play with footwear. Swapping from practical flats or block heels to a sleek pair of pumps can instantly elevate your Unstoppable Trousers and Poise Silk Blouse combination."
    ]
  }
];
