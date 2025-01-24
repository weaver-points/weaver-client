"use client";

import React from "react";
import { HiSun } from "react-icons/hi"; // Import the icon
import { useTheme } from "next-themes"; // Import theme hook

function Header() {
  const { theme, setTheme } = useTheme(); // Access theme state

  return (
    <div
      className={`flex justify-end items-center p-4 text-white ${
        theme === "dark" ? "bg-[#0D0D0D]" : "bg-white"
      }`}
    >
      <button
        className="flex items-center justify-center p-2 rounded-full bg-gray-700 hover:bg-gray-600"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // Toggle theme
        aria-label="Toggle Theme"
      >
        <HiSun
          className={`text-2xl ${
            theme === "dark" ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      </button>
    </div>
  );
}

export default Header;
