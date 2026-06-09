export const projectsData = [
  {
    id: 1,
    slug: "shl-assessment-recommender",
    title: "SHL Assessment Recommendation Assistant",
    description:
      "A modern AI-powered recommendation assistant that helps HR and talent teams find the right SHL assessment using conversational inputs, semantic search, and smart prompt orchestration.",
    image: "/images/projects/SHL.png",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/Dhruv0126/Assessment-Recommender",
    previewUrl:
      "https://dhruv0126-assessment-recommender-dhruv0126.streamlit.app/",
    stack: [
      "FastAPI",
      "Streamlit",
      "ChromaDB",
      "Hugging Face",
      "Groq",
      "RAG",
      "LangChain",
    ],
    featured: true,
    featuredOrder: 1,
  },
  {
    id: 2,
    slug: "resume-screener",
    title: "AI-Powered Resume Screener",
    description:
      "Built an AI resume screening system to parse PDF/DOCX/TXT resumes, extract key skills and experience, and rank candidates using a hybrid NLP approach (TF-IDF, embeddings, and LLM scoring). Developed a FastAPI backend and React dashboard integrated with Microsoft Azure services (Azure OpenAI, Blob Storage, Redis) for intelligent candidate ranking and recruiter analytics.",
    image: "/images/projects/AI_Powered Resume Screener.png",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/Dhruv0126",
    gitLabel: "GitHub Profile",
    previewUrl: null,
    previewLabel: "Online ongoing research project",
    caseStudySlug: "resume-screener",
    bentoCaseStudy: true,
    stack: ["React", "FastAPI", "Azure OpenAI"],
    featured: true,
    featuredOrder: 2,
  },
  {
    id: 3,
    slug: "rag-chatflow",
    title: "RAG ChatFlow",
    description:
      "RAG chatbot with PDF/TXT upload, Google Gemini embeddings, ChromaDB storage, and a Flask backend for grounded Q&A.",
    image: "/images/projects/RAG.png",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/Dhruv0126/Rag_ChatFlow/blob/main/README.md",
    previewUrl: "https://rag-chatflow-dhruv0126.onrender.com",
    stack: ["Python", "Flask", "Gemini", "ChromaDB"],
    featured: false,
  },
  {
    id: 4,
    slug: "utilities-yolov8",
    title: "Utilities YOLOv8",
    description:
      "Custom kitchen utilities detector with YOLOv8 and a Streamlit app for real-time image, video, and webcam inference.",
    image: "/images/projects/yolo1.png",
    tag: ["All", "AI/ML", "Web"],
    gitUrl:
      "https://github.com/Dhruv0126/Utilities_Yolov8/blob/main/README.md",
    previewUrl:
      "https://utilitiesyolov8-a5ajt696w6sbkw7pgzzpce.streamlit.app/",
    stack: ["YOLOv8", "OpenCV", "Streamlit"],
    featured: true,
    featuredOrder: 3,
  },
  {
    id: 5,
    slug: "talent-scout",
    title: "Talent Scout Hiring Assistant",
    description:
      "AI-powered hiring assistant chatbot that screens candidates, collects profile details, and generates tailored technical questions based on skills and conversation history using Streamlit and LLM APIs.",
    image: "/images/projects/RECRUIT.webp",
    tag: ["All", "AI/ML", "Web"],
    gitUrl: "https://github.com/Dhruv0126/TalentScout",
    previewUrl: "https://github.com/Dhruv0126/TalentScout",
    stack: ["Python", "Streamlit", "LLM", "Gemini"],
    featured: false,
  },
  {
    id: 6,
    slug: "wine-quality",
    title: "Wine Quality Check",
    description:
      "Neural network using Keras for multi-class classification of wine quality.",
    image: "/images/projects/wine-quality-check.png",
    tag: ["All", "AI/ML"],
    gitUrl:
      "https://github.com/Dhruv0126/Wine-Quality-Check/blob/main/README.md",
    previewUrl:
      "https://github.com/Dhruv0126/Wine-Quality-Check/blob/main/README.md",
    stack: ["Keras", "TensorFlow", "Python"],
    featured: false,
  },
  {
    id: 7,
    slug: "body-fun-detector",
    title: "BodyFunDetector Analyzer",
    description:
      "Real-time body function detector using OpenCV and PoseNet for accurate pose estimation.",
    image: "/images/projects/posture.png",
    tag: ["All", "AI/ML"],
    gitUrl:
      "https://github.com/Dhruv0126/BodyFuncDetector_Analyzer-/blob/main/README.md",
    previewUrl:
      "https://github.com/Dhruv0126/BodyFuncDetector_Analyzer-/blob/main/README.md",
    stack: ["OpenCV", "PoseNet", "Python"],
    featured: false,
  },
];

export const featuredProjects = projectsData
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));

export const caseStudyProject =
  projectsData.find((p) => p.bentoCaseStudy) ??
  projectsData.find((p) => p.caseStudySlug);

export const skillsData = [
  { name: "Python & ML", level: 92 },
  { name: "Deep Learning", level: 85 },
  { name: "NLP / LLM / RAG", level: 88 },
  { name: "Computer Vision", level: 82 },
  { name: "Web Development", level: 78 },
];

export const achievementsList = [
  { metric: "Projects", value: 7, postfix: "+" },
  { metric: "Internships", value: 2 },
  { metric: "Certifications", value: 3, postfix: "+" },
  { metric: "Years", value: 2, postfix: "+" },
];
