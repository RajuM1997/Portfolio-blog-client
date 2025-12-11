"use server";

export const getAllBlog = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    console.error("User data fetching Failed", await res.text());
  }
  return await res.json();
};
