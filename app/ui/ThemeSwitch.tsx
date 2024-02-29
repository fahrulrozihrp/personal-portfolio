"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function ThemeSwitch() {
  const [toggle, setToggle] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <div className="h-6 w-10 rounded-full bg-white border border-black"></div>
    );

  if (resolvedTheme === "light") {
    const handleClick = () => {
      setToggle(!toggle);
      setTheme("dark");
    };
    return (
      <div
        onClick={handleClick}
        className={`flex h-6 w-10 rounded-full cursor-pointer border border-black items-center ${
          toggle ? "justify-start bg-white" : "justify-end bg-purple-900"
        }`}
      >
        <motion.div
          className={`h-5 w-5 rounded-full ${toggle ? "bg-black" : "bg-white"}`}
          layout
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
        />
      </div>
    );
  }

  if (resolvedTheme === "dark") {
    const handleClick = () => {
      setToggle(!toggle);
      setTheme("light");
    };
    return (
      <div
        onClick={handleClick}
        className={`flex h-6 w-10 rounded-full cursor-pointer border border-black items-center ${
          toggle ? "justify-start bg-white" : "justify-end bg-purple-900"
        }`}
      >
        <motion.div
          className={`h-5 w-5 rounded-full ${toggle ? "bg-black" : "bg-white"}`}
          layout
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
        />
      </div>
    );
  }
}

export default ThemeSwitch;
