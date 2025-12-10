"use server";

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
