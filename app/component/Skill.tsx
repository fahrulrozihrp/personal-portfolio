"use client";

import React from "react";
import Image from "next/image";

const skills = [
  {
    name: "html",
    image_url: "/html.png",
  },
  { name: "css", image_url: "/css.png" },
  { name: "javascript", image_url: "/javascript.png" },
  { name: "nodejs", image_url: "/nodejs.png" },
  { name: "reactjs", image_url: "/react.png" },
  { name: "tailwindCSS", image_url: "/tailwind.png" },
  { name: "mysql", image_url: "/sql.png" },
  { name: "mongodb", image_url: "/mongodb.png" },
];

function Skill() {
  return (
    <div className="text-white text-[30px] md:text-[40px] flex flex-wrap leading-none font-bold tracking-tight h-[500px] md:h-[400px] w-[500px] card">
      <div>
        <h1>Skills</h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {skills.map((item) => (
          <div key={item.name}>
            <Image
              src={item.image_url}
              width={75}
              height={75}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
