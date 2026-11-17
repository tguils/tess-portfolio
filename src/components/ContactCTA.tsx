
export default function ContactCTA() {
  return (
    <section
    id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-5xl pb-20"
    >
      <div className="rounded-2xl bg-gray-100 px-8 py-12 md:px-12 md:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-600">
          Let's Connect
        </p>

        <h2
          id="contact-heading"
          className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
        >
          Have something in mind? Let's talk.
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
          I'm always interested in opportunities to collaborate,
          solve interesting problems, and build something meaningful.
        </p>

        <a
          href="mailto:tess.guilmette@gmail"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
        >
          Get in Touch
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
