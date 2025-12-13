"use client";

import { createProject } from "@/action/project/route";
import { Button } from "@/components/ui/button";
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
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CreateProjectForm({ token }: { token: string }) {
  const form = useForm<FieldValues>({
    defaultValues: {
      project_name: "",
      description: "",
      thumbnail: "",
      live_link: "",
      features: "",
      technology: "",
      server_repo_link: "",
      client_repo_link: "",
    },
  });

  const onSubmit = async (values: FieldValues) => {
    const newData = {
      ...values,
    };
    newData.features = values?.features?.split(",");
    newData.technology = values?.technology?.split(",");

    try {
      const result = await createProject(newData, token);
      const toastId = toast.loading("Project creating");
      if (result.success) {
        form.reset();
        toast.success("Project created successfully", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-3xl mx-auto w-full"
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
                      <Input placeholder="https://www.example.com" {...field} />
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
                      <Input placeholder="https://www.example.com" {...field} />
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
                      <Input placeholder="https://www.example.com" {...field} />
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
                      <Input placeholder="https://www.example.png" {...field} />
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
          <div className="text-right">
            <Button type="submit" variant="secondary" size={"lg"}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
