import { getAllBlog } from "@/action/blog/route";
import BlogTable from "@/components/modules/Blog/BlogTable";

const Blog = async () => {
  const { data } = await getAllBlog();
  console.log(data);

  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <BlogTable data={data} />
    </div>
  );
};

export default Blog;
