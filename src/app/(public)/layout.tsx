import Navbar from "@/components/shared/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex justify-center gap-4">
      <Navbar />
      {children}
    </main>
  );
}
