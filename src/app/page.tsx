
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-8 py-20">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
