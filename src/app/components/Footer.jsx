"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 text-white mt-12">
      <div className="container max-w-6xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-heading text-2xl font-bold gradient-text">
            DG
          </Link>
          <p className="text-sm text-[#ADB7BE] font-mono">
            Built with Next.js · Framer Motion · Tailwind
          </p>
        </div>

        <div className="flex gap-6 text-sm text-[#ADB7BE]">
          <a
            href="https://github.com/Dhruv0126"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dhruvgupta0126"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <Link href="/projects/resume-screener" className="hover:text-white transition-colors">
            Case Study
          </Link>
        </div>

        <p className="text-sm text-[#ADB7BE]">
          © {currentYear} Dhruv Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
