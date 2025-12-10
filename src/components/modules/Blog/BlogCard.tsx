import Image from "next/image";
import CommonButton from "../homes/CommonButton";

const BlogCard = ({ index }: { index: number }) => {
  return (
    <>
      {index % 2 === 0 ? (
        <>
          <div className="relative w-full  min-h-[250px] group overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="blog-image"
              fill
              className="object-cover px-3 lg:px-0 w-full h-full transition-transform duration-300 filter grayscale"
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
              How to start a full stack Project
            </h4>
            <p className="text-lg py-5 font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              repudiandae numquam doloremque molestiae tenetur voluptates,
              facere eos! Laudantium, laborum perferendis reprehenderit, quaerat
              quidem repellendus, nemo dolorum sequi esse facilis autem ipsam
              tempore. Illum incidunt esse asperiores quae, laboriosam harum
              ipsam sapiente veritatis eius error, qui tenetur necessitatibus
              velit! Eius veniam explicabo quibusdam nemo iure perferendis quae.
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="border text-sm border-white rounded-xl p-2">
                # React js
              </span>
              <span className="border text-sm border-white rounded-xl p-2">
                # Next js
              </span>
              <span className="border text-sm border-white rounded-xl p-2">
                # Node js
              </span>
              <span className="border text-sm border-white rounded-xl p-2">
                # Express js
              </span>
            </div>
            <div className="ml-auto text-right pt-5">
              <CommonButton>Read More</CommonButton>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-blue-600/5 order-2 md:order-1  p-5">
            <h4 className="text-xl font-bold pt-5 md:py-5 transition-all hover:text-blue-500">
              How to start a full stack Project
            </h4>
            <p className="text-lg py-5 font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              repudiandae numquam doloremque molestiae tenetur voluptates,
              facere eos! Laudantium, laborum perferendis reprehenderit, quaerat
              quidem repellendus, nemo dolorum sequi esse facilis autem ipsam
              tempore. Illum incidunt esse asperiores quae, laboriosam harum
              ipsam sapiente veritatis eius error, qui tenetur necessitatibus
              velit! Eius veniam explicabo quibusdam nemo iure perferendis quae.
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="border text-sm border-white rounded-xl p-2">
                # React js
              </span>
              <span className="border text-sm border-white rounded-xl p-2">
                # Next js
              </span>
              <span className="border text-sm border-white rounded-xl p-2">
                # Node js
              </span>
              <span className="border text-sm border-white rounded-xl p-2">
                # Express js
              </span>
            </div>
            <div className="ml-auto text-right pt-5">
              <CommonButton>Read More</CommonButton>
            </div>
          </div>
          <div className="relative w-full order-1 md:order-2 min-h-[250px] group overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="blog-image"
              fill
              className="object-cover px-3 lg:px-0 w-full h-full transition-transform duration-300 filter grayscale"
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
