
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
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

  const images = project.gallery?.length
    ? project.gallery
    : project.image
      ? [project.image]
      : [];

  // Short highlights for the top of featured pages.
  const highlights = project.highlights ?? [];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:px-8">
      <Link
        href="/work"
        className="text-sm font-medium text-gray-600 hover:text-purple-600"
      >
        ← Back to Work
      </Link>

      <header className="mt-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-600">
          {project.category}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
          {project.overview ?? project.description}
        </p>
      </header>

      {project.featured ? (
        <>
          {/* Featured project overview */}
          <section className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: role, technologies, highlights */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  My Role
                </h2>

                <p className="mt-3 text-gray-900">
                  {project.role ?? "Website Development"}
                </p>
              </div>

              <div>
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
              </div>

              {highlights.length > 0 && (
                <div>
                  <h2 className="mb-5 text-xl font-bold text-gray-900">
                    Project Highlights
                  </h2>

                  <ul className="space-y-3">
                   
{highlights.map((highlight) => (
  <li
    key={highlight}
    className="flex items-start gap-3"
  >
    <span
      aria-hidden="true"
      className="mt-1 font-bold text-purple-600"
    >
      ✓
    </span>

    <span className="text-gray-700">
      {highlight}
    </span>
  </li>
))}

                  </ul>
                </div>
              )}
            </div>

            {/* Right: main screenshot and thumbnails */}
            {images.length > 0 && (
              <div>
                <ProjectGallery
                  images={images}
                  title={project.title}
                />
              </div>
            )}
          </section>

          {/* Detailed technical contributions */}
          {project.features && project.features.length > 0 && (
            <section className="mt-16 border-t border-gray-200 pt-12">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">
                Key Technical Contributions
              </h2>

              <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature.title}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical approach and optional challenges */}
          {(project.technicalApproach ||
            (project.challenges && project.challenges.length > 0)) && (
            <ProjectCaseStudy
              technicalApproach={project.technicalApproach}
              challenges={project.challenges}
            />
          )}
        </>
      ) : (
        <>
          {/* Simpler layout for non-featured projects */}
          {images.length > 0 && (
            <div className="mt-12">
              <ProjectGallery
                images={images}
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
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Platform
              </h2>

              <p className="mt-3 text-gray-900">
                WordPress
              </p>
            </div>
          </div>
        </>
      )}

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-gray-700 underline underline-offset-4 transition-colors hover:text-purple-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600"
        >
          View Live Website
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </main>
  );
}
