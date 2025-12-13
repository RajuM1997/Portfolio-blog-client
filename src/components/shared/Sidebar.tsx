"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  PlusCircle,
  LogOut,
  User2,
  WorkflowIcon,
  Blend,
} from "lucide-react";
import { useAuth } from "@/providers/AuthProvider";

export default function Sidebar() {
  const { user, logout } = useAuth();
  return (
    <aside className="flex h-screen w-64 flex-col border-r">
      {/* Top navigation */}
      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
        <Link
          href="/dashboard/blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <User2 className="h-4 w-4" />
          All Users
        </Link>
        <Link
          href="/dashboard/project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <WorkflowIcon className="h-4 w-4" />
          Projects
        </Link>
        <Link
          href="/dashboard/blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Blogs
        </Link>
        <Link
          href="/dashboard/my-blogs"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Blend className="h-4 w-4" />
          My Blog
        </Link>
      </nav>

      {/* Bottom action */}
      {user?.email && (
        <div className="p-4 border-t border-gray-500">
          <Button
            variant="destructive"
            className="w-full justify-start gap-2 cursor-pointer"
            onClick={() => logout()}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      )}
    </aside>
  );
}
