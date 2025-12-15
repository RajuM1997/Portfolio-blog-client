import { getAllBlog } from "@/action/blog/route";
import BlogCard from "@/components/modules/Blog/BlogCard";
import { IBlog } from "@/types/blog";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blogs | DevSpace",
    description:
      "Read and manage blogs on DevSpace. Create, update, and delete posts with ease.",
    keywords: ["DevSpace blogs", "developer blog", "tech articles"],
    openGraph: {
      title: "Blogs | DevSpace",
      description:
        "Explore developer blogs and technical articles on DevSpace.",
      type: "article",
    },
  };
};

const Blogs = async () => {
  const { data } = await getAllBlog();
  return (
    <div className="py-26 px-4  md:px-16">
      <div className="pb-8">
        <h1 className="text-4xl font-bold mb-4 text-center pt-5">
          Blog & Insights
        </h1>
        <p className="text-center max-w-2xl mx-auto pb-5">
          Explore expert articles, industry trends, and practical tips to help
          you grow smarter, work faster, and stay ahead in today’s digital
          world.
        </p>
      </div>
      {data.map((blog: IBlog, i: number) => (
        <div className="grid grid-cols-1 lg:grid-cols-2" key={blog.id}>
          <BlogCard blog={blog} index={i} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
