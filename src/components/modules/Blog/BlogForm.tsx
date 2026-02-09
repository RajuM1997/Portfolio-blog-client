"use client";

import { createBlog } from "@/action/blog/route";
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

export default function CreateBlogForm({ token }: { token?: string }) {
  const form = useForm<FieldValues>({
    defaultValues: {
      title: "",
      content: "",
      thumbnail: "",
      tags: "",
    },
  });
  const onSubmit = async (values: FieldValues) => {
    const newData = {
      ...values,
    };
    newData.tags = values?.tags?.split(",");

    const result = await createBlog(newData, token as string);
    const toastId = toast.loading("Blog creating");
    if (result.success) {
      form.reset();
      toast.success("Blog created successfully", { id: toastId });
    } else {
      toast.error(result.message || "Failed to create blog");
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
          {/* Title */}
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Blog Title" {...field} />
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
                name="content"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-25"
                        placeholder="Blog Content"
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

          {/* Tags */}
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tag (comma separated)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Next.js, React, Web Development"
                        {...field}
                      />
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
