import BlogCard from "../Blog/BlogCard";

const BlogSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <h1 className="text-4xl font-bold mb-4 text-center pb-5">
        Blog & Insights
      </h1>
      {Array.from({ length: 3 }).map((_, i: number) => (
        <div className="grid grid-cols-1 md:grid-cols-2" key={i}>
          <BlogCard index={i} />
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
