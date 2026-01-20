export interface Review {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface Marigold {
  id: number;
  left: number; // percentage
  delay: number; // seconds
  size: number; // pixels
  duration: number; // seconds
}

export interface WeddingService {
  title: string;
  description: string;
  icon: string;
}
