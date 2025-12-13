import CreateBlogForm from "@/components/modules/Blog/BlogForm";
import { getServerCookies } from "@/lib/getServerCookie";

const AddBlog = async () => {
  const token = await getServerCookies();
  return (
    <div className="w-full max-w-7xl flex items-center mx-auto py-5">
      <CreateBlogForm token={token} />
    </div>
  );
};

export default AddBlog;
