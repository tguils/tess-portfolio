
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import ContactCTA from "@/components/ContactCTA";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 md:px-8">
      <Hero />

      <div className="mx-auto max-w-5xl pb-20">
        <FeaturedProjects />
      </div>
      <Skills />
      <ContactCTA />
    </main>
  );
}
