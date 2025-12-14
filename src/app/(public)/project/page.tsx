import { getAllProject } from "@/action/project/route";
import ProjectCard from "@/components/modules/Project/ProjectCard";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Projects | DevSpace",
    description:
      "Showcase and manage projects on DevSpace. A central place for your work and achievements.",
    keywords: ["DevSpace projects", "portfolio projects", "developer work"],
    openGraph: {
      title: "Projects | DevSpace",
      description: "Explore developer projects and portfolios on DevSpace.",
    },
  };
};

const Project = async () => {
  const { data } = await getAllProject(100);

  return (
    <div className="py-26 px-4  md:px-16">
      <div className="pb-8">
        <h1 className="text-4xl font-bold mb-4 text-center pt-5">
          Projects & Portfolio
        </h1>
        <p className="text-center max-w-2xl mx-auto pb-5">
          Discover a curated collection of projects showcasing practical
          solutions, innovative ideas, and hands-on experience. Explore web
          apps, dashboards, and tools built to solve real-world problems and
          demonstrate technical expertise.
        </p>
      </div>

      <ProjectCard data={data} />
    </div>
  );
};

export default Project;
