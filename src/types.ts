export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string; // Lucide icon name
  features: string[];
  featuresEn: string[];
  badge?: string;
}

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  image: string; // Will use high quality picsum/unsplash seeds
  tags: string[];
  link: string;
  year: string;
  stats?: { label: string; value: string };
  isFeatured?: boolean;
}

export interface AgencyStat {
  value: string;
  label: string;
  labelEn: string;
}
