"use server";

import { IBlog } from "@/types/blog";
import { updateTag } from "next/cache";

export const createBlog = async (payload: Partial<IBlog>, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Create blog Failed", await res.text());
  }
  updateTag("blog");
  return await res.json();
};

export const getAllBlog = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["blog"],
    },
  });
  if (!res.ok) {
    console.error("User data fetching Failed", await res.text());
  }

  return await res.json();
};

export const getMyBlog = async (token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/my-blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (!res.ok) {
    console.error("Blog Data Fetching Failed", await res.text());
  }
  return await res.json();
};

export const deleteBlog = async (id: number, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (!res.ok) {
    console.error("Blog delete Failed", await res.text());
  }
  updateTag("blog");

  return await res.json();
};

export const updateBlog = async (
  payload: Partial<IBlog>,
  id: number,
  token: string
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Blog update Failed", await res.text());
  }
  updateTag("blog");
  return await res.json();
};
