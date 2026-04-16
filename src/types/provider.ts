export interface Provider {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  experience: string;
  priceStart: number;
  priceLabel: string;
  region: string[];
  tags: string[];
  imageUrl?: string;
  verified: boolean;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  apartmentSize?: string;
}
