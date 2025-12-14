"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { deleteBlog } from "@/action/blog/route";
import { IUser } from "@/types/user";

interface IProps {
  data: IUser[];
  token?: string;
}

const UserTable = ({ data, token }: IProps) => {
  const handleDeleteUsr = async (id?: string) => {
    try {
      const result = await deleteBlog(Number(id), token as string);
      if (result.success) {
        toast.success("User delete successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full pt-5 max-w-7xl">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user) => (
            <TableRow key={user?.id}>
              <TableCell className="font-medium">{user?.id}</TableCell>
              <TableCell>{user?.name}</TableCell>
              <TableCell>{user?.email}</TableCell>

              <TableCell>{user?.phone}</TableCell>
              <TableCell>{user?.role}</TableCell>
              <TableCell className="text-right flex gap-4 justify-end">
                <Button
                  onClick={() => handleDeleteUsr(user?.id)}
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
    </div>
  );
};

export default UserTable;
