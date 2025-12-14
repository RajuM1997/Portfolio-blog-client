import AboutMe from "@/components/modules/homes/AboutSection";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "About Us | DevSpace",
    description:
      "Learn more about DevSpace — a modern portfolio and blog management platform built for developers and creators.",
    keywords: [
      "About DevSpace",
      "DevSpace platform",
      "developer portfolio",
      "blog management system",
    ],
    openGraph: {
      title: "About Us | DevSpace",
      description: "Discover the mission, vision, and story behind DevSpace.",
      siteName: "DevSpace",
      type: "website",
    },
  };
};

const About = () => {
  return (
    <div className="py-20 px-4 md:px-16">
      <AboutMe />
    </div>
  );
};

export default About;
