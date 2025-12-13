import { getMyBlog } from "@/action/blog/route";
import BlogTable from "@/components/modules/Blog/BlogTable";
import { getServerCookies } from "@/lib/getServerCookie";

const MyBlog = async () => {
  const token = await getServerCookies();
  const { data } = await getMyBlog(token as string);

  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <BlogTable data={data} />
    </div>
  );
};

export default MyBlog;
