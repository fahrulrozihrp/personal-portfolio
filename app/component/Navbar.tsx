import React from "react";

function Navbar() {
  return (
    <nav className="flex text-white text-[20px] md:text-[25px] px-1 pt-10 gap-x-10 justify-end opacity-80">
      <a href="#project" className="hover:text-[#e213e2]">
        Project
      </a>
      <a href="mailto:fahrulrozi816@gmail.com" className="hover:text-[#e213e2]">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
