"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

function ThemeSwitch() {
  const [toggle, setToggle] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <div className="h-6 w-10 rounded-full bg-purple-300 border border-black"></div>
    );

  if (resolvedTheme === "dark") {
    const handleClick = () => {
      setToggle(!toggle);
      setTheme("light");
    };

    return (
      <div
        onClick={handleClick}
        className={`flex h-6 w-10 rounded-full cursor-pointer border border-black items-center justify-end bg-black`}
      >
        <motion.div
          className={`h-5 w-5 rounded-full bg-purple-300`}
          layout
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
        />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    const handleClick = () => {
      setToggle(!toggle);
      setTheme("dark");
    };

    return (
      <div
        onClick={handleClick}
        className={`flex h-6 w-10 rounded-full cursor-pointer border border-black items-center justify-start bg-purple-300 `}
      >
        <motion.div
          className={`h-5 w-5 rounded-full bg-black`}
          layout
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
        />
      </div>
    );
  }
}

export default ThemeSwitch;
