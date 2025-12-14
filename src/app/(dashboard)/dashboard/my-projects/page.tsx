import { getMyProject } from "@/action/project/route";
import ProjectTable from "@/components/modules/Project/ProjectTable";
import { getServerCookies } from "@/lib/getServerCookie";
import React from "react";

const MyProjects = async () => {
  const token = await getServerCookies();
  const { data } = await getMyProject(token as string, 100);
  return (
    <div className="w-full max-w-7xl  mx-auto py-5">
      <ProjectTable data={data} token={token as string} />
    </div>
  );
};

export default MyProjects;
