

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  featured: boolean;
  image?: string;
  role?: string;
  category?: string;
  overview?: string;
gallery?: string[];
features?: {
  title: string;
  description: string;
}[];

technicalApproach?: string;

challenges?: {
  problem: string;
  solution: string;
}[];
highlights?: string[];
};