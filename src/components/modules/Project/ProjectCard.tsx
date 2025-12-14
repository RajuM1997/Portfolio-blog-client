/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
type Project = {
  title: string;
  description: string;
  features: string[];
  thumbnail: string;
  liveLink?: string;
  repoLink?: string;
};

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import CommonButton from "../homes/CommonButton";
import { IProject } from "@/types/project";

const ProjectCard = ({ data }: { data: IProject[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const data = Array.from({ length: 4 }).map((_, i) => ({
  //   title: "Project Title",
  //   description: "A brief description about the project goes here.",
  //   features: ["Feature 1", "Feature 2", "Feature 3"],
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // }));
  return (
    <div className="grid w-full px-4 lg:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {data?.map((project, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className="rounded-xl overflow-hidden flex flex-col transition-transform"
          >
            <Card
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const midX = rect.width / 2;
                const midY = rect.height / 2;

                const rotateX = ((y - midY) / midY) * -8;
                const rotateY = ((x - midX) / midX) * 8;

                card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
              }}
              className={`
    relative bg-blue-600/5 overflow-hidden p-5
    border transition-all duration-300
    will-change-transform 
    ${isActive ? "border-blue-500/80" : "border-transparent"}
  `}
              style={{
                transition: "transform 0.15s ease-out, border 0.3s ease",
              }}
            >
              <div
                className={`
                    pointer-events-none absolute inset-0 transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                        radial-gradient(
                          180px at 50% 110%,
                          rgba(37, 99, 235, 0.55),
                          rgba(0,0,0,0.1)
                        )
                      `,
                  }}
                />
              </div>

              <div className="relative w-full lg:h-99 overflow-hidden z-10">
                <Image
                  src={project.thumbnail}
                  alt={project.project_name}
                  width={1000}
                  height={400}
                  className={`
                      object-cover transition-transform duration-300
                      w-full filter grayscale
                    `}
                  loading="eager"
                />
              </div>

              <div className="relative z-10 md:p-6 flex flex-col flex-1 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.project_name}
                </h3>

                <p className="text-white/80 flex-1">{project.description}</p>

                <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-white/70">
                  {project?.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="flex gap-4 py-5 flex-wrap">
                  {project?.technology?.map((tach) => (
                    <span
                      key={tach}
                      className="border text-sm border-white rounded-xl p-2"
                    >
                      {tach}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 flex-col md:flex-row justify-between">
                  <div className="flex gap-4 justify-center">
                    <a
                      href={project.live_link}
                      className="
                        px-4 py-2 rounded-md bg-black
                        text-blue-400 text-sm
                        border border-blue-500/40
                        hover:bg-blue-600 hover:text-white
                        transition w-full md:w-auto text-center
                      "
                    >
                      Live Site
                    </a>

                    <a
                      href={project?.client_repo_link}
                      className="
                        px-4 py-2 rounded-md bg-black
                        text-blue-400 text-sm
                        border border-blue-500/40
                        hover:bg-blue-600 hover:text-white
                        transition w-full md:w-auto text-center
                      "
                    >
                      GitHub Client
                    </a>
                    <a
                      href={project?.server_repo_link}
                      className="
                        px-4 py-2 rounded-md bg-black
                        text-blue-400 text-sm
                        border border-blue-500/40
                        hover:bg-blue-600 hover:text-white
                        transition w-full md:w-auto text-center
                      "
                    >
                      GitHub Server
                    </a>
                  </div>
                  {/* <CommonButton>View Details</CommonButton> */}
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
