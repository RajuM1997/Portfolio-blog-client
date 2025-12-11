import { IBlog } from "@/types/blog";

export const createBlog = async (payload: Partial<IBlog>) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("User Login Failed", await res.text());
  }
  return await res.json();
};
