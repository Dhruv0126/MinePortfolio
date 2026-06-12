"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../data/projects";
import { staggerContainer, fadeInUp } from "../lib/animations";
import SectionHeading from "./SectionHeading";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag) && project.slug !== "resume-screener"
  );

  return (
    <section id="projects" className="py-8 md:py-12">
      <SectionHeading
        label="// projects"
        title="All Projects"
        subtitle="Filter by category or explore everything I've built"
      />

      <div className="flex flex-row justify-center items-center gap-2 py-4 mb-8">
        {["All", "AI/ML", "Web"].map((name) => (
          <ProjectTag
            key={name}
            onClick={setTag}
            name={name}
            isSelected={tag === name}
          />
        ))}
      </div>

      <motion.ul
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.li key={project.id} variants={fadeInUp} custom={index} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              gitLabel={project.gitLabel}
              previewUrl={project.previewUrl}
              previewLabel={project.previewLabel}
              caseStudySlug={project.caseStudySlug}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;
