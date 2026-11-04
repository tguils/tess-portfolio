
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900">
        My Work
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        A selection of websites and digital experiences
        I've helped design, develop, and maintain.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            slug={project.slug}
          />
        ))}
      </div>
    </main>
  );
}
