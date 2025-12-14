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
    <div>
      <h1>Dashboard page</h1>
    </div>
  );
};

export default dashboard;
