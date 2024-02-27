import Image from "next/image";
import Button from "./ui/Button";
import Project from "./component/Project";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skill from "./component/Skill";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-wrap pt-10 md:pt-14 gap-y-20 md:justify-between">
        {/* ---about--- */}
        <About />
        {/* ---skill--- */}
        <Skill />
        <div className="bottom-10 flex justify-center w-full">
          <a
            href="#project"
            className="text-white/70 text-center border border-purple-900 px-3 py-2 rounded-full text-xs font-semibold hover:bg-cyan-500/50 hover:text-white transition-all duration-300 animate-bounce"
          >
            Check my Projects
          </a>
        </div>
      </section>
      {/* ---Project section--- */}
      <section className=" pt-10" id="project">
        <Project />
      </section>
      <Footer />
    </>
  );
}
