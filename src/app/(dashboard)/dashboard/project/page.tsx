import { getAllBlog } from "@/action/blog/route";
import ProjectTable from "@/components/modules/Project/ProjectTable";

const Project = async () => {
  const { data } = await getAllBlog();

  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <ProjectTable data={data} />
    </div>
  );
};

export default Project;
