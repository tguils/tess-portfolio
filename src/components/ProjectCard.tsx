import Link from "next/link";
import type { Project } from "@/types/project";
// This defines which properties ProjectCard accepts
type ProjectCardProps = Pick<
  Project,
  "title" | "description" | "technologies" | "slug"
>;

export default function ProjectCard({
  title,
  description,
  technologies,
  slug,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border p-6">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2">{description}</p>

      <p className="mt-4 text-sm">
        {technologies.join(" • ")}
      </p>

       <Link
        href={`/work/${slug}`}
        className="mt-5 inline-block font-medium text-gray-900 underline hover:text-purple-600"
      >
        View Case Study
      </Link>
    </article>
  );
}