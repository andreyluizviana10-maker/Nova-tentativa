export interface PreviewItem {
  id: string;
  number: string;
  theme: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  details: string[];
  scriptureRef?: string;
  isArtisticVisual?: boolean;
}

export interface TimelineItem {
  number: number;
  period: string;
  title: string;
  description: string;
  keyLocations: string[];
  scriptureSpan: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  isArtisticVisual?: boolean;
}

export interface BonusItem {
  number: number;
  title: string;
  description: string;
  badgeText: string;
  iconName: string;
  format: string;
  pagesCount: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  city: string;
  stars: number;
  quote: string;
  avatar: string;
  verifiedLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
  practicalExample: string;
}
