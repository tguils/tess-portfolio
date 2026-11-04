
type HeroProps = {
  title: string;
  description: string;
};
export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-600">
        Front-End Developer
      </p>

      <h1 className="mb-6 text-5xl font-bold text-gray-900">
        Hi, I'm Tess. I build for the web.
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
        I build responsive, accessible websites and digital experiences
        using modern front-end technologies.
      </p>

      <a
        href="#work"
        className="mt-8 inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-purple-700"
      >
        View My Work
      </a>
    </section>
  );
}
