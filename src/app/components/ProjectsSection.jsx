"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TalentScout Hiring Assistant",
    description:
      "Developed an AI-powered hiring assistant with Streamlit, LangChain, Groq API, and Python to automate candidate screening. Enabled resume parsing, intelligent filtering, and dynamic generation of tailored interview questions, streamlining the recruitment process with an interactive web interface.",
    image: "/images/projects/RECRUIT.webp",
    tag: ["All", "AI/ML","Web"],
    gitUrl: "https://github.com/Dhruv0126/TalentScout/blob/main/README.md",
    previewUrl: "https://talentscout-dhruv0126.streamlit.app/", // Replace with actual live preview URL if available
  },
  {
    id: 2,
    title: "RAG ChatFlow",
    description:
      "Developed a RAG chatbot enabling PDF/TXT upload, chunking, and embedding via Google Gemini API with ChromaDB storage. Built a Flask backend and HTML/JS frontend to retrieve top-K chunks and generate grounded responses for seamless chat.",
    image: "/images/projects/RAG.png",
    tag: ["All", "AI/ML","Web"],
    gitUrl: "https://github.com/Dhruv0126/Rag_ChatFlow/blob/main/README.md",
    previewUrl: "https://rag-chatflow-dhruv0126.onrender.com", // Replace with actual live preview URL if available
  },
  {
    id: 3,
    title: "Utilities_Yolov8 ",
    description:
      "Built a custom kitchen utilities detector with YOLOv8, labeling spoons, cups, and plates. Developed a Streamlit app for real-time image, video, and webcam inference with bounding boxes, deployed via Colab/ngrok and integrated CI.",
    image: "/images/projects/yolo1.png",
    tag: ["All", "AI/ML","Web"],
    gitUrl: "https://github.com/Dhruv0126/Utilities_Yolov8/blob/main/README.md",
    previewUrl: "https://utilitiesyolov8-a5ajt696w6sbkw7pgzzpce.streamlit.app/", // Replace with actual live preview URL if available
  },
  {
    id: 4,
    title: "Wine Quality Check",
    description:
      "Implemented a neural network using Keras for multi-class classification of wine quality.",
    image: "/images/projects/wine-quality-check.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Dhruv0126/Wine-Quality-Check/blob/main/README.md", // Update with actual repository URL if available
    previewUrl: "https://github.com/Dhruv0126/Wine-Quality-Check/blob/main/README.md", // Replace with actual live preview URL if available
  },
  {
    id: 5,
    title: "BodyFunDetector Analyzer",
    description:
      "Built a real-time body function detector using OpenCV and PoseNet for accurate pose estimation, reducing latency by 30%.",
    image: "/images/projects/posture.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/Dhruv0126/BodyFuncDetector_Analyzer-/blob/main/README.md", // Update with actual repository URL if available
    previewUrl: "https://github.com/Dhruv0126/BodyFuncDetector_Analyzer-/blob/main/README.md", // Replace with actual live preview URL if available
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const text = document.querySelector(".projects-heading");
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const letters = document.querySelectorAll(".projects-heading .letter");
    letters.forEach((letter, i) => {
      letter.style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 projects-heading">
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

// Add CSS for animations
const styles = `
  .projects-heading .letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(1em);
    animation: float 0.5s forwards;
  }

  @keyframes float {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject styles into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default ProjectsSection;
