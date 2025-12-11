import { IBlog } from "@/types/blog";
import BlogCard from "../Blog/BlogCard";

const BlogSection = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <h1 className="text-4xl font-bold mb-4 text-center pb-5">
        Blog & Insights
      </h1>
      {blogs?.map((blog, i: number) => (
        <div className="grid grid-cols-1 md:grid-cols-2" key={i}>
          <BlogCard index={i} blog={blog} />
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
