"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { label: "Go to Highlights", action: () => document.getElementById("highlights")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Go to About", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Go to Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Go to Contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Resume Screener Case Study", action: () => window.location.href = "/projects/resume-screener" },
  { label: "Copy Email", action: () => navigator.clipboard.writeText("dhruv06012@gmail.com") },
  { label: "Open GitHub", action: () => window.open("https://github.com/Dhruv0126", "_blank") },
  { label: "Open LinkedIn", action: () => window.open("https://www.linkedin.com/in/dhruvgupta0126", "_blank") },
  { label: "Download CV", action: () => window.open("/DhruvGupta__Resume.pdf", "_blank") },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const run = (cmd) => {
    cmd.action();
    setOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center pt-[20vh] px-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg glass-card overflow-hidden shadow-2xl"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search commands..."
              className="w-full px-4 py-4 bg-transparent text-white font-mono text-sm outline-none border-b border-white/10 placeholder:text-[#ADB7BE]"
            />
            <ul className="max-h-64 overflow-y-auto py-2">
              {filtered.map((cmd) => (
                <li key={cmd.label}>
                  <button
                    onClick={() => run(cmd)}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#ADB7BE] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {cmd.label}
                  </button>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-4 py-3 text-sm text-[#ADB7BE]">No commands found</li>
              )}
            </ul>
            <div className="px-4 py-2 border-t border-white/10 text-xs text-[#ADB7BE] font-mono">
              ↑↓ navigate · esc close · ⌘K toggle
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
