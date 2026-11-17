
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-600">
            Portfolio
          </p>

          <h2
            id="work-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
          >
            Selected Work
          </h2>
        </div>

        <Link
          href="/work"
          className="font-medium text-gray-900 transition-colors hover:text-purple-600"
        >
          View All Projects <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
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
  );
}
