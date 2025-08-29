'use client';
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white px-6 py-3 flex items-center justify-between shadow-md z-50">
      {/* Tombol Dark/Light */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white text-black px-3 py-1 rounded mr-6"
      >
        {darkMode ? "Light" : "Dark"}
      </button>

      {/* Menu Scroll Horizontal */}
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#home" className="hover:text-pink-300">Home</a></li>
        <li><a href="#about" className="hover:text-pink-300">About</a></li>
        <li><a href="#skills" className="hover:text-pink-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-pink-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
      </ul>
    </nav>
  );
}
