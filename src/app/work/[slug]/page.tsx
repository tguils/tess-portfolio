
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        {project.title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-purple-700"
      >
        Visit Website
      </a>
    </main>
  );
}
