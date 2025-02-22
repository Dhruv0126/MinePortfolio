"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>Programming Languages:</strong> Python, SQL, C++</li>
        <li><strong>Tools & Technologies:</strong> VS Code, TensorFlow, Scikit-Learn, Pandas, NumPy, Matplotlib, Git, Power BI, OpenCV, Streamlit, LangChain</li>
        <li><strong>Technical Skills:</strong> Machine Learning (Supervised/Unsupervised), Deep Learning (ANN, CNN, RNN), NLP/LLM, Computer Vision</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>Gautam Buddha University</strong><br />
          Bachelor of Information Technology (GPA: 9.00/10.00)<br />
          Expected May 2025<br />
          Greater Noida, Uttar Pradesh
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Science Specialization - LinuxWorld</li>
        <li>Data Analytics and Visualization Job Simulation - Accenture (Collab with Forage)</li>
        <li>Deploy Machine Learning Solution - Devtown (Collab of Microsoft Learn & GDG Ranchi)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const text = document.querySelector(".floating-text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, i) => {
      letter.style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animated-image"
        >
          <Image
            src="/images/Quick Overview The Industries Most Affected by AI in 2020.jpeg"
            width={500}
            height={500}
            alt="About image"
            className="animated-image"
          />
        </motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 floating-text">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m a data-driven specializing in Generative AI/ML, with expertise in predictive modeling, data analytics, and advanced ML techniques. Proficient in Python, TensorFlow, and Power BI, I build efficient models and real-time analytics systems to enhance decision-making. Passionate about deep learning and NLP, I continuously explore innovative solutions while prioritizing data security and ethical AI practices.         
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated CSS for animations
const styles = `
  .floating-text .letter {
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

export default AboutSection;