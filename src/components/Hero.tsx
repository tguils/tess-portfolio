
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-5xl py-12 md:py-20"
    >
      <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-purple-600">
        TESS GUILMETTE - Front-End Web Developer
      </p>

      <h1
        id="hero-heading"
        className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl"
      >
        Building thoughtful websites and digital experiences.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
        I'm a web developer specializing in responsive websites, custom functionality, and bringing designs to life. From polished front-end experiences to complex WordPress solutions, I enjoy turning ideas into websites that work beautifully.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="#work"
          className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
        >
          View My Work
        </Link>

        <a
          href="mailto:tess.guilmette@gmail.com"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:border-gray-900"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
