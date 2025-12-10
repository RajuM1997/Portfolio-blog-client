/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
const AuthContext = createContext<any>(null);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getMe();
  }, []);
  const logout = async () => {
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
    setUser(null);
  };
  const login = async (data: FieldValues) => {
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
    const result = await res.json();
    setUser(result.data);
    return result;
  };

  const authInfo = { user, setUser, logout, login, loading };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export function useAuth() {
  return useContext(AuthContext);
}
