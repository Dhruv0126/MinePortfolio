"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { featuredProjects } from "../data/projects";
import { scrollReveal } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const FeaturedProjectsScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-8 md:py-12">
      <SectionHeading
        label="// featured"
        title="Featured Work"
        subtitle="Swipe through my top AI/ML projects"
        align="left"
      />

      <motion.div
        ref={ref}
        variants={scrollReveal}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex gap-6 overflow-x-auto horizontal-scroll-snap pb-4 -mx-4 px-4 md:-mx-0 md:px-0"
      >
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] glass-card overflow-hidden group"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
              <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/50 text-accent-cyan border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-bold text-white">
                {project.title}
              </h3>
              <p className="text-[#ADB7BE] text-sm mt-2 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <Link
                  href={project.gitUrl}
                  target="_blank"
                  className="flex items-center gap-1.5 text-sm text-[#ADB7BE] hover:text-white transition-colors"
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  {project.gitLabel || "Code"}
                </Link>
                {project.previewUrl ? (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#ADB7BE] hover:text-white transition-colors"
                  >
                    <EyeIcon className="w-4 h-4" />
                    Preview
                  </a>
                ) : project.previewLabel ? (
                  <span className="text-xs font-mono text-accent-cyan">
                    {project.previewLabel}
                  </span>
                ) : null}
                {project.caseStudySlug && (
                  <Link
                    href={`/projects/${project.caseStudySlug}`}
                    className="text-sm font-mono text-accent-cyan hover:text-white transition-colors ml-auto"
                  >
                    Case study →
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProjectsScroll;
