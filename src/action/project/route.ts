"use server";

import { IProject } from "@/types/project";
import { updateTag } from "next/cache";

export const createProject = async (
  payload: Partial<IProject>,
  token: string
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Create Project Failed", await res.text());
  }
  updateTag("PROJECT");
  return await res.json();
};

export const getMyProject = async (token: string, limit: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/my-projects?limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      next: {
        tags: ["PROJECT"],
      },
    }
  );
  if (!res.ok) {
    console.error("Project Data Fetching Failed", await res.text());
  }
  return await res.json();
};

export const getAllProject = async (limit: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project?limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["PROJECT"],
      },
    }
  );
  if (!res.ok) {
    console.error("Project data fetching Failed", await res.text());
  }

  return await res.json();
};

export const getProjectById = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    console.error("Project Data Fetching Failed", await res.text());
  }
  return await res.json();
};

export const deleteProject = async (id: number, token: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (!res.ok) {
    console.error("Project delete Failed", await res.text());
  }
  updateTag("PROJECT");

  return await res.json();
};

export const updateProject = async (
  payload: Partial<IProject>,
  id: number,
  token: string
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Project update Failed", await res.text());
  }
  updateTag("PROJECT");
  return await res.json();
};
