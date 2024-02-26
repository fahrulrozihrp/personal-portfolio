import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const projects = [
  {
    name: "Project 1",
    type: "E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore.",
    image_url: "/image_project/reflect-app.png",
    link: "https://www.google.com",
    stack: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    name: "Project 2",
    type: "E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore.",
    image_url: "/image_project/reflect-app.png",
    link: "https://www.google.com",
    stack: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    name: "Project 3",
    type: "E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore.",
    image_url: "/image_project/reflect-app.png",
    link: "https://www.google.com",
    stack: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    name: "Project 4",
    type: "E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore.",
    image_url: "/image_project/reflect-app.png",
    link: "https://www.google.com",
    stack: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    name: "Project 5",
    type: "E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore.",
    image_url: "/image_project/reflect-app.png",
    link: "https://www.google.com",
    stack: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    name: "Project 6",
    type: "E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore.",
    image_url: "/image_project/reflect-app.png",
    link: "https://www.google.com",
    stack: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    name: "Project 7",
    type: "E-Commerce",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore.",
    image_url: "/image_project/reflect-app.png",
    link: "https://www.google.com",
    stack: ["NextJS", "Typescript", "TailwindCSS"],
  },
];

function Project() {
  return (
    <>
      {/* <div className="text-white text-[40px] bg-red-600">Projects</div> */}
      <section className="scroll-mt-10" id="portfolios">
        <div className="flex flex-col gap-8">
          <h3 className="text-white text-2xl leading-none font-bold tracking-tight">
            Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((item) => (
              <div
                className="bg-[#282828] border border-[#4f4f4f] rounded-xl p-4 text-white !flex !flex-col gap-4 hover:border-purple-900 hover:bg-[#190d24] duration-300 transition-all"
                key={item.name}
              >
                <div className="relative h-[200px]">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    className="rounded-lg object-cover"
                    fill
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    {item.stack.map((stx) => (
                      <div
                        className="bg-purple-900/50 py-1 px-2 border border-purple-900 rounded-lg text-sm"
                        key={stx}
                      >
                        {stx}
                      </div>
                    ))}
                  </div>
                  <p className="text-lg opacity-70">{item.description}</p>
                </div>
                <a href={item.link} className="mt-auto">
                  <Button title={"Visit"} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
