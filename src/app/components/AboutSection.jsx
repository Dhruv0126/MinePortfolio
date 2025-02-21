"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Quick Overview The Industries Most Affected by AI in 2020.jpeg" width={500} height={500} alt="About image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a data-driven specializing in Generative AI/ML, with expertise in predictive modeling, data analytics, and advanced ML techniques. Proficient in Python, TensorFlow, and Power BI, I build efficient models and real-time analytics systems to enhance decision-making. Passionate about deep learning and NLP, I continuously explore innovative solutions while prioritizing data security and ethical AI practices.         
          {/* Replace all ' with &apos; */}
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

export default AboutSection;