

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
};