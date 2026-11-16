
import type { Project } from "@/types/project";

export const projects = [
  {
    id: 1,
    slug: "concours-vault",
    title: "Concours Vault",
    description:
      "A membership-based automotive platform featuring custom user profiles, personalized garages, and integrated services.",
    technologies: ["WordPress", "PHP", "JavaScript", "Stripe", "API Integrations"],
    url: "https://concoursvault.com",
    featured: true,
    image: "/projects/concours-vault.webp",
    role: "Custom Development & Integrations",
    category: "Custom Web Development",
  },
  {
    id: 2,
    slug: "hubble-therapeutics",
    title: "Hubble Therapeutics",
    description:
      "A responsive website developed from Figma designs, with an emphasis on accurate visual implementation and usability.",
    technologies: ["WordPress", "CSS", "Divi"],
    url: "https://hubbletx.com",
    featured: true,
    image: "/projects/hubble-therapeutics.webp",
    role: "Front-End Development",
    category: "Website Development",
  },
  {
    id: 3,
    slug: "ogre-chocolates",
    title: "Ogre Chocolates",
    description:
      "A custom-branded ecommerce website developed from Figma designs with WooCommerce shopping functionality.",
    technologies: ["WordPress", "WooCommerce", "CSS", "JavaScript"],
    url: "https://ogrechocolates.com",
    featured: true,
    image: "/projects/ogre-chocolates.webp",
    role: "Front-End & Ecommerce Development",
    category: "Ecommerce",
  },
] satisfies Project[];
