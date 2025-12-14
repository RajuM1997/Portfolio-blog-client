import { getAllBlog } from "@/action/blog/route";
import BlogCard from "@/components/modules/Blog/BlogCard";
import AboutMe from "@/components/modules/homes/AboutSection";
import HeroCanvas from "@/components/modules/homes/HeroSection";
import ProjectShowcase from "@/components/modules/homes/ProjectSection";
import { IBlog } from "@/types/blog";
export default async function Home() {
  const { data } = await getAllBlog();

  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen flex-col items-center justify-between md:px-16 sm:items-start">
        <HeroCanvas heightClass="min-h-screen" />
        <AboutMe />
        <ProjectShowcase />
        {data?.map((blog: IBlog, i: number) => (
          <div className="grid grid-cols-1 md:grid-cols-2" key={i}>
            <BlogCard index={i} blog={blog} />
          </div>
        ))}
      </main>
    </div>
  );
}
