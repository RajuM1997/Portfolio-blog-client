"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import CommonButton from "../modules/homes/CommonButton";
import { useAuth } from "@/providers/AuthProvider";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed left-0 right-0 mx-auto z-30
        bg-background border
        transition-all duration-300
        ${
          scrolled
            ? "top-1 max-w-6xl rounded-full border-blue-300 px-6 md:px-8"
            : "top-6 max-w-7xl  rounded-none px-4 md:px-6"
        }
      `}
    >
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          {/* <Logo /> */}
          Raju
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        {/* Actions and Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          {user?.email ? (
            <CommonButton onClick={logout}>Logout</CommonButton>
          ) : (
            <CommonButton>
              <Link href="/login" className="block w-full text-center">
                Login
              </Link>
            </CommonButton>
          )}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
