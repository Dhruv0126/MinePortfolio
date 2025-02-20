"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TalentScout Hiring Assistant",
    description:
      "Built an AI hiring assistant using Streamlit, LangChain, Groq API, and Python to automate candidate screening and generate tailored interview questions.",
    image: "/images/projects/ai-shopee-chatbot.png",
    tag: ["All", "AI/ML","Web"],
    gitUrl: "https://github.com/Dhruv0126/TalentScout",
    previewUrl: "https://github.com/Dhruv0126/TalentScout/blob/main/README.md", // Replace with actual live preview URL if available
  },
  {
    id: 2,
    title: "Fake Review Detection",
    description:
      "Developed a Flask web app integrating a machine learning model using SVM, TF-IDF, LIME, and SHAP to detect fake reviews with 90% accuracy.",
    image: "/images/projects/fake-review-detection.png",
    tag: ["All", "AI/ML","Web"],
    gitUrl: "https://github.com/Dhruv0126/Fake-Review-Detection",
    previewUrl: "https://github.com/Dhruv0126/Fake-Review-Detection/blob/main/README.md", // Replace with actual live preview URL if available
  },
  {
    id: 3,
    title: "Google Stock Forecasting",
    description:
      "Forecasted Google stock prices using RNNs and LSTM with TensorFlow and Keras, visualizing trends with Matplotlib.",
    image: "/images/projects/google-stock-forecasting.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Dhruv0126/Google_Stock_Price_forecasting-",
    previewUrl: "https://github.com/Dhruv0126/Google_Stock_Price_forecasting-/blob/main/README.md", // Replace with actual live preview URL if available
  },
  {
    id: 4,
    title: "Wine Quality Check",
    description:
      "Implemented a neural network using Keras for multi-class classification of wine quality.",
    image: "/images/projects/wine-quality-check.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Dhruv0126?tab=repositories", // Update with actual repository URL if available
    previewUrl: "https://github.com/Dhruv0126?tab=repositories", // Replace with actual live preview URL if available
  },
  {
    id: 5,
    title: "BodyFunDetector Analyzer",
    description:
      "Built a real-time body function detector using OpenCV and PoseNet for accurate pose estimation, reducing latency by 30%.",
    image: "/images/projects/posture.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Dhruv0126/BodyFuncDetector_Analyzer-", // Update with actual repository URL if available
    previewUrl: "https://github.com/Dhruv0126/BodyFuncDetector_Analyzer-/blob/main/README.md", // Replace with actual live preview URL if available
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/ML"
          isSelected={tag === "AI/ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
