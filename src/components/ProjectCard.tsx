import type { Project } from "@/types/project";
// This defines which properties ProjectCard accepts
type ProjectCardProps = Pick<
  Project,
  "title" | "description" | "technologies" | "url"
>;

export default function ProjectCard({
  title,
  description,
  technologies,
  url,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border p-6">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2">{description}</p>

      <p className="mt-4 text-sm">
        {technologies.join(" • ")}
      </p>

      <a href={url}>View Website</a>
    </article>
  );
}