export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Singapore' | 'Asia' | 'World' | 'Opinion' | 'Life' | 'Business' | 'Sport' | 'Visual' | 'Podcasts';
  subcategoryTag?: string; // e.g. "ECONOMY", "ANALYSIS", "GLOBAL VIEW", "PERSONAL ESSAY"
  author?: string;
  authorRole?: string;
  publishedTime: string;
  readTimeMinutes: number;
  imageUrl: string;
  imageCaption?: string;
  imageCredit?: string;
  content: string[];
  keyTakeaways?: string[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
  commentsCount: number;
  trendingTag?: string;
}

export interface VisualStory {
  id: string;
  title: string;
  type: 'Interactive' | 'Graphic Story' | 'Photo Gallery';
  imageUrl: string;
  subtitle: string;
  publishedTime: string;
  description: string;
  slides: {
    title: string;
    description: string;
    imageUrl: string;
    credit: string;
  }[];
}

export interface ArticleComment {
  id: string;
  author: string;
  location: string;
  timestamp: string;
  content: string;
  likes: number;
}
