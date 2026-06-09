"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollReveal } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const GithubStats = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(true);
        else setStats(data);
      })
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  const items = stats
    ? [
        { label: "Public Repos", value: stats.public_repos },
        { label: "Followers", value: stats.followers },
        { label: "Following", value: stats.following },
      ]
    : [
        { label: "Public Repos", value: "—" },
        { label: "Followers", value: "—" },
        { label: "Following", value: "—" },
      ];

  return (
    <section className="py-8">
      <SectionHeading
        label="// github"
        title="Open Source Activity"
        subtitle="Live stats from my GitHub profile"
        align="left"
      />
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="glass-card p-6 md:p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <p className="font-heading text-xl font-bold text-white">
              @{stats?.login || "Dhruv0126"}
            </p>
            <p className="text-sm text-[#ADB7BE] mt-1">
              Building AI/ML projects in public
            </p>
          </div>
          <a
            href="https://github.com/Dhruv0126"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono text-accent-cyan hover:text-white transition-colors"
          >
            View profile →
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/5"
            >
              <p className="font-heading text-2xl md:text-3xl font-bold text-white">
                {item.value}
              </p>
              <p className="text-xs text-[#ADB7BE] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GithubStats;
