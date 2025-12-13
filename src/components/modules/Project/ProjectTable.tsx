"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CommonButton from "../homes/CommonButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { ProjectUpdateModel } from "./ProjectUpdateModal";
import { IProject } from "@/types/project";
import { deleteProject } from "@/action/project/route";
import { toast } from "sonner";
interface IPropsProject {
  data: IProject[];
  token: string;
}
const ProjectTable = ({ data, token }: IPropsProject) => {
  const handleDeleteBlog = async (id?: string) => {
    try {
      const result = await deleteProject(Number(id), token as string);
      if (result.success) {
        toast.success("Blog delete successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-7xl">
      <div className="ml-auto text-right py-5">
        <CommonButton>
          <Link href={"/dashboard/add-project"}>Add Project</Link>
        </CommonButton>
      </div>
      {data?.length > 0 ? (
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Serial No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Live Link</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((project) => (
              <TableRow key={project?.id}>
                <TableCell className="font-medium">{project?.id}</TableCell>
                <TableCell>{project?.project_name}</TableCell>
                <TableCell>{project?.description.slice(0, 60)}...</TableCell>
                <TableCell>{project?.live_link}</TableCell>
                <TableCell className="text-right flex gap-4 justify-end">
                  <ProjectUpdateModel project={project} token={token} />

                  <Button
                    onClick={() => handleDeleteBlog(project.id)}
                    variant={"secondary"}
                    className="cursor-pointer"
                  >
                    <Trash2 className="text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="min-h-screen flex justify-center items-center">
          No data found
        </p>
      )}
    </div>
  );
};

export default ProjectTable;
