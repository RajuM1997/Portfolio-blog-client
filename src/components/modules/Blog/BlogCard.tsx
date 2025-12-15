import Image from "next/image";
import CommonButton from "../homes/CommonButton";
import { IBlog } from "@/types/blog";
import Link from "next/link";

interface IProps {
  index: number;
  blog: IBlog;
}

const BlogCard = ({ blog, index }: IProps) => {
  return (
    <>
      {index % 2 === 0 ? (
        <>
          <div className="relative w-full  min-h-[250px] group overflow-hidden">
            <Image
              src={blog.thumbnail}
              alt="blog-image"
              fill
              className="object-cover px-3 lg:px-0 w-full h-full transition-transform duration-300 filter grayscale"
              loading="eager"
            />

            <div
              className="
      absolute inset-0 
      bg-black/50 
      opacity-0 
      group-hover:opacity-100 
      transition-opacity 
      duration-300
     
    "
            />
          </div>

          <div className="bg-blue-600/5 p-5">
            <h4 className="text-xl font-bold pt-5 lg:py-5 transition-all hover:text-blue-500">
              {blog.title}
            </h4>
            <p className="text-lg py-5 font-normal">{blog.content}</p>
            <div className="flex gap-4 flex-wrap">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="border text-sm border-white rounded-xl p-2"
                >
                  # {tag}
                </span>
              ))}
            </div>
            <div className="ml-auto text-right pt-5">
              <CommonButton>
                <Link href={`/blogs/${blog.id}`}>Read More</Link>
              </CommonButton>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-blue-600/5 order-2 lg:order-1  p-5">
            <h4 className="text-xl font-bold pt-5 md:py-5 transition-all hover:text-blue-500">
              {blog.title}
            </h4>
            <p className="text-lg py-5 font-normal">{blog.content}</p>
            <div className="flex gap-4 flex-wrap">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="border text-sm border-white rounded-xl p-2"
                >
                  # {tag}
                </span>
              ))}
            </div>
            <div className="ml-auto text-right pt-5">
              <CommonButton>
                <Link href={`/blogs/${blog.id}`}>Read More</Link>
              </CommonButton>
            </div>
          </div>
          <div className="relative w-full order-1 lg:order-2 min-h-[250px] group overflow-hidden">
            <Image
              src={blog.thumbnail}
              alt="blog-image"
              fill
              className="object-cover px-3 lg:px-0 w-full h-full transition-transform duration-300 filter grayscale"
              loading="eager"
            />

            <div
              className="
      absolute inset-0 
      bg-black/50 
      opacity-0 
      group-hover:opacity-100 
      transition-opacity 
      duration-300
     
    "
            />
          </div>
        </>
      )}
    </>
  );
};

export default BlogCard;
