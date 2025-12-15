import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex flex-col md:flex-row gap-4">
      <Sidebar />
      {children}
    </main>
  );
}
