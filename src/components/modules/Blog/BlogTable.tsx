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
import { BlogUpdateModel } from "./BlogUpdateModal";
import { IBlog } from "@/types/blog";

const BlogTable = ({ data }: { data: Partial<IBlog[]> }) => {
  return (
    <div className="w-full max-w-7xl">
      <div className="ml-auto text-right py-5">
        <CommonButton>
          <Link href={"/dashboard/addBlog"}>Add Blog</Link>
        </CommonButton>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Views Count</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((blog) => (
            <TableRow key={blog?.id}>
              <TableCell className="font-medium">{blog?.id}</TableCell>
              <TableCell>{blog?.title}</TableCell>
              <TableCell>{blog?.content.slice(0, 60)}...</TableCell>

              <TableCell>{blog?.tags}</TableCell>
              <TableCell>0</TableCell>
              <TableCell className="text-right flex gap-4 justify-end">
                <BlogUpdateModel />

                <Button variant={"secondary"} className="cursor-pointer">
                  <Trash2 className="text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogTable;
