"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../data/projects";

const SkillBars = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-4">
      {skillsData.map((skill, index) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1.5">
            <span className="text-sm font-medium text-white">{skill.name}</span>
            <span className="text-xs font-mono text-accent-cyan">{skill.level}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-pink"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBars;
