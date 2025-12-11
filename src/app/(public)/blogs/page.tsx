import { getAllBlog } from "@/action/blog/route";
import BlogCard from "@/components/modules/Blog/BlogCard";
import { IBlog } from "@/types/blog";

const Blogs = async () => {
  const { data } = await getAllBlog();
  return (
    <div className="py-26 px-4 lg:px-0">
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
        <div className="grid grid-cols-1 md:grid-cols-2" key={blog.id}>
          <BlogCard blog={blog} index={i} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
