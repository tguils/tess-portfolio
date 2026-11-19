
const skills = [
  {
    title: "Front-End Development",
    description:
      "Building responsive, accessible websites and interfaces using modern front-end technologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    title: "WordPress & Ecommerce",
    description:
      "Developing custom WordPress websites, extending functionality, and building ecommerce experiences.",
    technologies: [
      "WordPress",
      "PHP",
      "WooCommerce",
      "Divi",
      "Elementor",
    ],
  },
  {
    title: "Custom Development & Integrations",
    description:
      "Extending website functionality through custom code, APIs, membership systems, and third-party integrations.",
    technologies: [
      "REST APIs",
      "Stripe",
      "WordPress Hooks",
      "Custom Post Types",
      "Third-Party APIs",
    ],
  },
];

export default function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="mx-auto max-w-5xl py-20"
    >
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-purple-600">
          What I Do
        </p>

        <h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
        >
          Development with an eye for design.
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          From responsive interfaces to custom functionality,
          I build websites that balance thoughtful design
          with practical solutions.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="border-t border-gray-200 pt-6"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {skill.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {skill.description}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-purple-600">
              {skill.technologies.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
