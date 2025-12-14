import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/shared/Footer";
import { AuthProvider } from "@/providers/AuthProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "DevSpace | Portfolio & Blog Management System",
    description:
      "DevSpace is a modern portfolio and blog management system where users can create, update, and manage blogs and projects.",
    keywords: [
      "DevSpace",
      "portfolio",
      "blog management system",
      "developer blogs",
      "projects",
    ],
    openGraph: {
      title: "DevSpace | Portfolio & Blog Platform",
      description:
        "Build your portfolio, publish blogs, and manage content in one place.",
      siteName: "DevSpace",
      type: "website",
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Toaster richColors position="top-center" />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
