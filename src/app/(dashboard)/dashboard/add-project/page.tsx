import CreateProjectForm from "@/components/modules/Project/CreateProjectForm";
import { getServerCookies } from "@/lib/getServerCookie";

const AddProject = async () => {
  const token = await getServerCookies();
  return (
    <div className="w-full max-w-7xl flex items-center mx-auto py-5">
      <CreateProjectForm token={token as string} />
    </div>
  );
};

export default AddProject;
