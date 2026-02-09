"use client";
import { updateProject } from "@/action/project/route";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IProject } from "@/types/project";
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
interface IProjectProps {
  project: IProject;
  token: string;
}
export function ProjectUpdateModel({ project, token }: IProjectProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<FieldValues>({
    defaultValues: {
      project_name: project.project_name || "",
      description: project.description || "",
      thumbnail: project.thumbnail || "",
      live_link: project.live_link || "",
      features: project.features || "",
      technology: project.technology || "",
      server_repo_link: project.server_repo_link || "",
      client_repo_link: project.client_repo_link || "",
    },
  });

  const onSubmit = async (values: FieldValues) => {
    const newData = {
      ...values,
    };

    if (!Array.isArray(values.features)) {
      newData.features = values?.features?.split(",");
    }
    if (!Array.isArray(values.technology)) {
      newData.technology = values?.technology?.split(",");
    }
    const toastId = toast.loading("Project updating...");

    const res = await updateProject(newData, Number(project.id), token);
    if (res.success) {
      toast.success("Project updated successfully", { id: toastId });
      setOpen(false);
    } else {
      toast.error(res.message || "Failed to update project");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit2 className="text-green-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
            id="update-blog"
          >
            {/* Name */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="project_name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Project Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* repo client link */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="client_repo_link"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Github Client Repo Link</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* repo server link */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="server_repo_link"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Github Server Repo Link</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Live website link */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="live_link"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Live Website Link</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-25"
                          placeholder="Project Description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* img url */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="thumbnail"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Thumbnail Url</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.example.png"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* features */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="features"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Features (comma separated)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="All Private route protected with jwt, Custom auth "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* features */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="technology"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Technology (comma separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="React, Next, Node" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
        <DialogFooter className="sm:justify-end">
          <Button form="update-blog" type="submit" variant="secondary">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
