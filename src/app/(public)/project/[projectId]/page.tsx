import { getProjectById } from "@/action/project/route";
import { IProject } from "@/types/project";
import Image from "next/image";

export const generateStaticParams = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project?limit=6`
  );
  const { data: projects } = await res.json();
  return projects?.map((project: IProject) => ({
    id: String(project.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const { data } = await getProjectById(Number(projectId));
  return {
    title: data?.project_name,
    description: data?.description,
  };
};

const ProjectDetails = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const { projectId } = await params;
  const { data } = await getProjectById(Number(projectId));

  return (
    <div className="py-26 px-4 md:px-16 ">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-5">
          <figure>
            <Image
              src={data.thumbnail}
              alt={data.thumbnail + data.project_name}
              width={600}
              height={400}
              className="w-full h-[420] object-cover"
              loading="eager"
            />
          </figure>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className=" p-5">
            <h4 className="text-xl font-bold pt-5 md:py-5 transition-all hover:text-blue-500">
              {data?.project_name}
            </h4>
            <p className="text-lg py-5 font-normal">{data?.description}</p>
            <div className="flex gap-4 flex-wrap">
              {data?.technology?.map((tech: string) => (
                <span
                  key={tech}
                  className="border text-sm border-white rounded-xl p-2"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-white/70">
              {data?.features?.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 flex-col md:flex-row justify-between">
              <div className="flex gap-4 justify-center">
                <a
                  href={data.live_link}
                  className="
                        px-4 py-2 rounded-md bg-black
                        text-blue-400 text-sm
                        border border-blue-500/40
                        hover:bg-blue-600 hover:text-white
                        transition w-full md:w-auto text-center
                      "
                >
                  Live Site
                </a>

                <a
                  href={data?.client_repo_link}
                  className="
                        px-4 py-2 rounded-md bg-black
                        text-blue-400 text-sm
                        border border-blue-500/40
                        hover:bg-blue-600 hover:text-white
                        transition w-full md:w-auto text-center
                      "
                >
                  GitHub Client
                </a>
                <a
                  href={data?.server_repo_link}
                  className="
                        px-4 py-2 rounded-md bg-black
                        text-blue-400 text-sm
                        border border-blue-500/40
                        hover:bg-blue-600 hover:text-white
                        transition w-full md:w-auto text-center
                      "
                >
                  GitHub Server
                </a>
              </div>
              {/* <CommonButton>View Details</CommonButton> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
