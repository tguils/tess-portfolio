import type { Project } from "@/types/project";

export const projects = [
{
  id: 1,
  slug: "lumber-barn",
  title: "Lumber Barn",
  description: "Website development and responsive design",
  technologies: ["WordPress", "CSS", "JavaScript"],
  url: "https://lumberbarn.com",
  featured: true,
},
{
  id: 2,
  slug: "concours-vault",
  title: "Concours Vault",
  description: "Custom membership website development",
  technologies: ["WordPress", "PHP", "Stripe"],
  url: "https://concoursvault.com",
  featured: false,
},
] satisfies Project[];