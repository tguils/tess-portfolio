
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 md:px-8">
      <div className="mb-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-600">
          Portfolio
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          My Work
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
          A collection of websites and digital experiences I've
          helped develop, from custom functionality and ecommerce
          to responsive front-end implementation.
        </p>
      </div>

      <section aria-labelledby="featured-heading">
        <h2
          id="featured-heading"
          className="mb-8 text-2xl font-bold text-gray-900"
        >
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              slug={project.slug}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="more-heading"
        className="mt-20"
      >
        <h2
          id="more-heading"
          className="mb-8 text-2xl font-bold text-gray-900"
        >
          More Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              slug={project.slug}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
