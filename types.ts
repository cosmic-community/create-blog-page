// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Featured image metafield structure
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Blog post object type
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: CosmicImage | null;
    author?: string;
    published_date?: string;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guard for blog posts
export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}