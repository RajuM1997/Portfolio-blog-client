"use client";
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
import { Edit2 } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export function BlogUpdateModel() {
  const [open, setOpen] = useState(false);
  const form = useForm<FieldValues>({
    defaultValues: {
      title: "",
      content: "",
      thumbnail: "",
      tag: "",
    },
  });

  const onSubmit = async (values: FieldValues) => {
    const newData = {
      ...values,
    };
    newData.tag = values?.tag?.split(",");
    console.log(newData);
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

            {/* Tags */}
            <div className="flex items-center gap-2">
              <div className="grid flex-1 gap-2">
                <FormField
                  control={form.control}
                  name="tag"
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
