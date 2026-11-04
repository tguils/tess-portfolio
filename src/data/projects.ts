import type { Project } from "@/types/project";

export const projects = [
  {
    id: 1,
    title: "Lumber Barn",
    description: "Website development and responsive design",
    technologies: ["WordPress", "CSS", "JavaScript"],
    url: "https://lumberbarn.com",
  },
  {
    id: 2,
    title: "Concours Vault",
    description: "Custom membership website development",
    technologies: ["WordPress", "PHP", "Stripe"],
    url: "https://concoursvault.com",
  },
] satisfies Project[];