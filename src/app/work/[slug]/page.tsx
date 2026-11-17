
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";
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
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-8">
      <Link
        href="/work"
        className="text-sm font-medium text-gray-600 hover:text-purple-600"
      >
        ← Back to Work
      </Link>

      <div className="mt-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-600">
          {project.category}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
          {project.overview ?? project.description}
        </p>
      </div>

      {(project.gallery?.length || project.image) && (
        <div className="mt-12">
          <ProjectGallery
            images={
              project.gallery?.length
                ? project.gallery
                : [project.image!]
            }
            title={project.title}
          />
        </div>
      )}

      <div className="mt-12 grid gap-8 border-t border-gray-200 pt-8 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            My Role
          </h2>

          <p className="mt-3 text-gray-900">
            {project.role ?? "Website Development"}
          </p>
        </div>

        <div>
          {project.featured ? (
            <>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Technologies
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Platform
              </h2>

              <p className="mt-3 text-gray-900">
                WordPress
              </p>
            </>
          )}
        </div>
      </div>

      
{project.url && (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-purple-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
  >
    View Live Website
    <span aria-hidden="true">↗</span>
  </a>
)}

    </main>
  );
}
