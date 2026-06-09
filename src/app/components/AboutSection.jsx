"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillBars from "./SkillBars";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scrollReveal } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillBars />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="relative pl-6 border-l border-primary-500/30 space-y-6">
        <div className="relative">
          <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-500/20" />
          <p className="font-heading font-semibold text-white">
            Gautam Buddha University
          </p>
          <p className="text-[#ADB7BE] text-sm mt-1">
            Bachelor of Information Technology · GPA 9.00/10.00
          </p>
          <p className="text-xs font-mono text-accent-cyan mt-1">
            Expected May 2025 · Greater Noida, UP
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="relative pl-6 border-l border-accent-cyan/30 space-y-6">
        {[
          "Data Science Specialization — LinuxWorld",
          "Data Analytics & Visualization — Accenture (Forage)",
          "Deploy ML Solutions — Devtown (Microsoft Learn & GDG Ranchi)",
        ].map((cert, i) => (
          <div key={cert} className="relative">
            <span className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-accent-cyan ring-4 ring-accent-cyan/20" />
            <p className="text-[#ADB7BE] text-sm">{cert}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="py-8 md:py-12">
      <SectionHeading
        label="// about"
        title="About Me"
        subtitle="Turning messy data into intelligent products — from RAG pipelines and LLM apps to vision systems that ship"
        align="left"
      />

      <div className="md:grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div className="glass-card overflow-hidden">
            <Image
              src="/images/Quick Overview The Industries Most Affected by AI in 2020.jpeg"
              width={500}
              height={500}
              alt="About Dhruv Gupta"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#ADB7BE] text-base lg:text-lg text-pretty leading-relaxed"
          >
            I&apos;m a data-driven AI/ML engineer specializing in Generative AI,
            predictive modeling, and advanced ML techniques. Proficient in Python,
            TensorFlow, and LangChain, I build efficient models and real-time
            analytics systems. Passionate about deep learning and NLP, I explore
            innovative solutions while prioritizing ethical AI practices.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-row gap-2 mt-8 flex-wrap">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 text-[#ADB7BE]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
