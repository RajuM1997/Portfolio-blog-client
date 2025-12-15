"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    console.log("User Registration Failed", await res.text());
  }
  return await res.json();
};

export const loginAction = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    console.error("User Login Failed", await res.text());
  }

  // Set cookies
  const cookieStore = await cookies();
  const result = await res.json();
  cookieStore.set("accessToken", result.data.accessToken, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return {
    success: true,
    user: result.data.user,
    token: result.data.accessToken,
  };
};
export const logoutAction = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    console.error("User Login Failed", await res.text());
  }

  // Set cookies
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  redirect("/login");
};

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    console.error("User Login Failed", await res.text());
  }
  return await res.json();
}
