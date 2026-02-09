/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IProject } from "@/types/project";
import { updateTag } from "next/cache";

export const createProject = async (
  payload: Partial<IProject>,
  token: string,
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    });

    updateTag("PROJECT");
    return await res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Project update Failed. Please try again."
      }`,
    };
  }
};

export const getMyProject = async (token: string, limit: number) => {
  try {
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
      },
    );

    return await res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Project get Failed. Please try again."
      }`,
    };
  }
};

export const getAllProject = async (limit: number) => {
  try {
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
      },
    );

    return await res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Projects get Failed. Please try again."
      }`,
    };
  }
};

export const getProjectById = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return await res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Project get Failed. Please try again."
      }`,
    };
  }
};

export const deleteProject = async (id: number, token: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      },
    );

    updateTag("PROJECT");

    return await res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Project get Failed. Please try again."
      }`,
    };
  }
};

export const updateProject = async (
  payload: Partial<IProject>,
  id: number,
  token: string,
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      },
    );
    if (!res.ok) {
      console.error("Project update Failed", await res.text());
    }
    updateTag("PROJECT");
    return await res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Project update Failed. Please try again."
      }`,
    };
  }
};
