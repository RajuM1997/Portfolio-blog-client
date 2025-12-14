import { getBlogById } from "@/action/blog/route";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { IBlog } from "@/types/blog";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog?limit=5`);
  const { data: blogs } = await res.json();
  return blogs?.map((blog: IBlog) => ({
    id: String(blog.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data } = await getBlogById(Number(id));
  return {
    title: data?.title,
    description: data?.content,
  };
};

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const { data } = await getBlogById(Number(id));
  return (
    <div className="py-26 px-4 md:px-16 ">
      <div className="max-w-4xl py-7 mx-auto text-center">
        <h1 className="text-2xl font-bold lg:text-6xl">{data?.title}</h1>
        <div className="flex gap-3 items-center justify-center pt-5">
          <div className="flex gap-2 items-center">
            <figure>
              <Image
                src={
                  "https://images.unsplash.com/photo-1764893216777-a2efc8b372b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="author-image"
                width={50}
                height={50}
                className="rounded-full w-10 h-10 object-center"
              />
            </figure>
            <span className="text-muted-foreground text-sm">
              {data?.author?.name}
            </span>
          </div>
          <span className="text-muted-foreground text-sm">
            {format(parseISO(data?.createdAt), "MMM d, yyyy")}
          </span>
          <span className="text-muted-foreground text-sm">
            {data?.author?.email}
          </span>
        </div>
        <div className="flex gap-3 items-center justify-center flex-wrap pt-5">
          {data?.tags?.map((tag: string) => (
            <span
              key={tag}
              className="text-muted-foreground font-medium text-sm border p-2 rounded-md"
            >
              # {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full">
        <figure className="w-full">
          <Image
            src={data?.thumbnail}
            alt="blog-image"
            width={1000}
            height={400}
            className="rounded-lg object-cover w-full h-full lg:h-[450px]"
          />
        </figure>
        <div className="pt-10">
          <p className="text-lg">{data?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
