"use client";
import React from "react";
import { motion } from "framer-motion";
import { scrollReveal } from "../lib/animations";

const SectionHeading = ({ label, title, subtitle, align = "center" }) => {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col mb-10 md:mb-14 ${alignClass}`}
    >
      {label && (
        <span className="font-mono text-accent-cyan text-sm mb-2">{label}</span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#ADB7BE] mt-3 max-w-2xl text-pretty text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
