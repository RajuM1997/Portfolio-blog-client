import DashboardCharts from "@/components/modules/dashboard/DashboardChart";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Dashboard | DevSpace",
    description:
      "DevSpace dashboard for managing blogs, projects, users, and content.",
    robots: {
      index: false,
      follow: false,
    },
  };
};

const dashboard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <DashboardCharts />
    </div>
  );
};

export default dashboard;
