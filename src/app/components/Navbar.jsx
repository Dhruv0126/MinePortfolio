"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { title: "Highlights", path: "#highlights" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed mx-auto border border-white/10 top-0 left-0 right-0 z-40 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3 max-w-6xl">
        <Link
          href="/"
          className="font-heading text-2xl font-bold gradient-text"
        >
          DG
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-[#ADB7BE] hover:text-white hover:border-white/30 transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon className="w-4 h-4" />
            ) : (
              <MoonIcon className="w-4 h-4" />
            )}
          </button>

          <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-[#ADB7BE] border border-white/10 rounded-md">
            ⌘K
          </kbd>

          <div className="mobile-menu block md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label={navbarOpen ? "Close menu" : "Open menu"}
              className="flex items-center px-3 py-2 border rounded border-white/20 text-[#ADB7BE] hover:text-white hover:border-white/40"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-6 mt-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
