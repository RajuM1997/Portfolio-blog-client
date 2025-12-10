import AboutMe from "@/components/modules/homes/AboutSection";
import BlogSection from "@/components/modules/homes/BlogSection";
import HeroCanvas from "@/components/modules/homes/HeroSection";
import ProjectShowcase from "@/components/modules/homes/ProjectSection";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen flex-col items-center justify-between md:px-16 sm:items-start">
        <HeroCanvas heightClass="min-h-screen" />
        <AboutMe />
        <ProjectShowcase />
        <BlogSection />
      </main>
    </div>
  );
}
