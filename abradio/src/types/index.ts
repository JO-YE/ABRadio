// In src/types/index.ts
export interface Podcast {
    id: number;
    title: string;
    description: string;
    image_url?: string;
    author: string;
    category_id?: number;
    category_name?: string;
  }
  
  export interface Episode {
    id: number;
    title: string;
    description: string;
    audio_url: string;
    image_url?: string;
    podcast_id: number;
    duration?: string;
    published_at: string;
  }
  
  export interface PaginatedResponse<T> {
    data: T[];
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      per_page: number;
      to: number;
      total: number;
    };
  }