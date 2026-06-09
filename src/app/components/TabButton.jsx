"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="mr-4 group">
      <p className={`font-medium text-sm hover:text-white transition-colors ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan mt-1.5"
      />
    </button>
  );
};

export default TabButton;
