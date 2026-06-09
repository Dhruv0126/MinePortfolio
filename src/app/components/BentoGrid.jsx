"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { achievementsList, caseStudyProject, featuredProjects } from "../data/projects";
import { staggerContainer, fadeInUp } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const primaryFeatured = caseStudyProject;
  const secondaryFeatured = featuredProjects.find((p) => p.id !== primaryFeatured?.id);

  return (
    <section id="highlights" className="py-8 md:py-12">
      <SectionHeading
        label="// highlights"
        title="What I've Been Building"
        subtitle="Stats, featured AI projects, and core skills at a glance"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-fr"
      >
        {/* Stats row */}
        {achievementsList.map((item, i) => (
          <motion.div
            key={item.metric}
            variants={fadeInUp}
            custom={i}
            className="glass-card p-6 flex flex-col items-center justify-center md:col-span-1"
          >
            <p className="font-heading text-3xl md:text-4xl font-bold text-white">
              {isInView && (
                <CountUp
                  end={item.value}
                  duration={2}
                  suffix={item.postfix || ""}
                />
              )}
            </p>
            <p className="text-[#ADB7BE] text-sm mt-1">{item.metric}</p>
          </motion.div>
        ))}

        {/* Featured project - large */}
        {primaryFeatured && (
          <motion.div
            key={primaryFeatured.id}
            variants={fadeInUp}
            custom={4}
            className="glass-card md:col-span-2 md:row-span-2 overflow-hidden group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10" />
            <Image
              src={primaryFeatured.image}
              alt={primaryFeatured.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            />
            <div className="relative z-20 p-6 h-full flex flex-col justify-end">
              <span className="font-mono text-xs text-accent-cyan mb-2">Featured</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                {primaryFeatured.title}
              </h3>
              <p className="text-[#ADB7BE] text-sm mt-2 line-clamp-2">
                {primaryFeatured.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {primaryFeatured.caseStudySlug && (
                  <Link
                    href={`/projects/${primaryFeatured.caseStudySlug}`}
                    className="text-sm px-4 py-2 rounded-full bg-primary-500/80 hover:bg-primary-500 text-white transition-colors"
                  >
                    Case Study
                  </Link>
                )}
                {primaryFeatured.gitUrl && (
                  <a
                    href={primaryFeatured.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full border border-white/20 text-white hover:border-accent-cyan transition-colors"
                  >
                    {primaryFeatured.gitLabel || "GitHub"}
                  </a>
                )}
                {primaryFeatured.previewUrl ? (
                  <a
                    href={primaryFeatured.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full border border-white/20 text-white hover:border-accent-cyan transition-colors"
                  >
                    Live Demo
                  </a>
                ) : primaryFeatured.previewLabel ? (
                  <span className="text-sm px-4 py-2 rounded-full border border-white/20 text-accent-cyan font-mono">
                    {primaryFeatured.previewLabel}
                  </span>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}

        {/* Skills bento */}
        <motion.div
          variants={fadeInUp}
          custom={5}
          className="glass-card p-6 md:col-span-2 md:row-span-1"
        >
          <p className="font-mono text-xs text-accent-cyan mb-3">{"// core stack"}</p>
          <div className="flex flex-wrap gap-2">
            {["Python", "TensorFlow", "LangChain", "YOLOv8", "RAG", "Streamlit", "Flask", "OpenCV"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-[#ADB7BE] hover:text-white hover:border-primary-500/50 transition-colors"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Second featured - compact */}
        {secondaryFeatured && (
          <motion.div
            key={secondaryFeatured.id}
            variants={fadeInUp}
            custom={6}
            className="glass-card p-6 md:col-span-2 group hover:border-primary-500/30 transition-colors"
          >
            <span className="font-mono text-xs text-accent-pink mb-2 block">Featured</span>
            <h3 className="font-heading text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">
              {secondaryFeatured.title}
            </h3>
            <p className="text-[#ADB7BE] text-sm mt-2 line-clamp-2">
              {secondaryFeatured.description}
            </p>
            {secondaryFeatured.previewUrl ? (
              <a
                href={secondaryFeatured.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-mono text-accent-cyan hover:text-white transition-colors"
              >
                Try live demo →
              </a>
            ) : secondaryFeatured.previewLabel ? (
              <p className="mt-3 text-sm font-mono text-accent-cyan">
                {secondaryFeatured.previewLabel}
              </p>
            ) : null}
          </motion.div>
        )}

        {/* Open to work card */}
        <motion.div
          variants={fadeInUp}
          custom={7}
          className="glass-card p-6 md:col-span-2 flex items-center gap-4"
        >
          <div className="relative flex-shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </div>
          <div>
            <p className="font-heading font-semibold text-white">Open to Opportunities</p>
            <p className="text-sm text-[#ADB7BE]">
              AI/ML Engineer · Data Analyst · ML Engineer · NLP Engineer
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BentoGrid;
