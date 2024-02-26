import React from "react";
import Image from "next/image";

function Skill() {
  return (
    <div className="text-white text-[30px] md:text-[40px] flex flex-wrap leading-none font-bold tracking-tight h-[500px] w-[500px] card">
      <div>
        <h1>Skills</h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <Image src="/html.png" width={100} height={100} alt="logo html" />
        <Image src="/css.png" width={100} height={100} alt="logo css" />
        <Image
          src="/javascript.png"
          width={100}
          height={100}
          alt="logo javascript"
        />
        <Image src="/nodejs.png" width={100} height={100} alt="logo nodejs" />
        <Image src="/react.png" width={100} height={100} alt="logo reactjs" />
        <Image
          src="/tailwind.png"
          width={100}
          height={40}
          alt="logo tailwind"
        />
        <Image src="/sql.png" width={100} height={100} alt="logo sql" />
        <Image src="/mongodb.png" width={100} height={100} alt="logo mongodb" />
      </div>
    </div>
  );
}

export default Skill;
