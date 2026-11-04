import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="work">
      <h2 className="text-3xl font-bold">
        Featured Projects
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects
  .filter((project) => project.featured)
  .map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
}