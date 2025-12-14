import { getAllProject } from "@/action/project/route";
import ProjectTable from "@/components/modules/Project/ProjectTable";
import { getServerCookies } from "@/lib/getServerCookie";

const Project = async () => {
  const { data } = await getAllProject(100);
  const token = await getServerCookies();

  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <ProjectTable data={data} token={token as string} />
    </div>
  );
};

export default Project;
