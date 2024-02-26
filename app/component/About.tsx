import React from "react";
import Button from "../ui/Button";

function About() {
  return (
    <div className="h-[500px] flex items-center card">
      <div className="flex flex-col gap-8 ">
        <h1 className="text-white text-[40px] md:text-[80px] leading-none font-bold tracking-tight">
          Hello! <br />
          I'm <strong className="gradient-text">Fahrul Rozi Harahap</strong>
          <br />
          <span className="text-[30px] md:text-[60px]">
            A Website Developer
          </span>
        </h1>
        <p className="text-white text-lg opacity-80 md:w-[800px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea provident
          quae neque fugit libero impedit nemo, esse enim assumenda mollitia
          corrupti quam sapiente
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="https://www.instagram.com/fahrulrozihrp"
            target="_blank"
            className="text-white"
          >
            <Button title={"Instagram"} />
          </a>
          <a
            href="https://www.linkedin.com/in/fahrulrozihrp"
            target="_blank"
            className="text-white"
          >
            <Button title={"Linkedin"} />
          </a>
          <a
            href="https://www.github.com/fahrulrozihrp"
            target="_blank"
            className="text-white"
          >
            <Button title={"Github"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
