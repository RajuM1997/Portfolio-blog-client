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
      <ProjectCard data={data} />
    </div>
  );
};

export default Project;
