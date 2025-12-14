import ProjectCard from "../Project/ProjectCard";
import CommonButton from "./CommonButton";
import Link from "next/link";

export default async function ProjectShowcase() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project?limit=4`,
    {
      next: {
        tags: ["PROJECT"],
      },
    }
  );
  const { data } = await res.json();

  return (
    <section className="relative py-16 w-ful px-4 lg:px-0">
      <h2 className="text-4xl font-bold mb-4 text-center pb-5">
        Projects & Portfolio
      </h2>
      <div className="py-5 text-center md:text-right">
        <CommonButton>
          <Link href={"/project"}>See All</Link>
        </CommonButton>
      </div>
      <ProjectCard data={data} />
    </section>
  );
}
