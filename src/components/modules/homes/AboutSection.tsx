import Image from "next/image";
import { aboutMe } from "@/data/about";
import SkillsSection from "./SkillSection";
// import { Facebook, Github, Linkedin } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="flex flex-col xl:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="w-80 h-80 lg:w-100 lg:h-100 relative rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src={aboutMe.image}
              alt={aboutMe.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">{aboutMe.bio}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Personal Details</h3>
              <ul className="space-y-1 ">
                <li>
                  <strong>Name:</strong> {aboutMe.name}
                </li>
                <li>
                  <strong>Title:</strong> {aboutMe.title}
                </li>
                <li>
                  <strong>Email:</strong> {aboutMe.email}
                </li>
                <li>
                  <strong>Phone:</strong> {aboutMe.phone}
                </li>
                <li>
                  <strong>Location:</strong> {aboutMe.location}
                </li>
              </ul>
            </div>

            {/* <div>
              <h3 className="font-semibold mb-2">Social Links</h3>
              <ul className="space-y-1 flex gap-4">
                <li>
                  <a
                    href={aboutMe.socials.github}
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    <Github
                      color="white"
                      className="w-10 h-10 bg-black rounded-full p-2 border border-amber-50"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={aboutMe.socials.linkedin}
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    <Linkedin
                      color="white"
                      className="w-10 h-10 bg-black rounded-full p-2 border border-amber-50"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={aboutMe.socials.twitter}
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    <Facebook
                      color="white"
                      className="w-10 h-10 bg-black rounded-full p-2 border border-amber-50"
                    />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Skills</h3>
            <div className="space-y-3">
              <SkillsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
