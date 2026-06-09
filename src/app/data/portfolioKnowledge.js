export const portfolioKnowledge = [
  {
    keywords: ["shl", "assessment", "recommender", "recommendation", "hr"],
    answer:
      "SHL Assessment Recommendation Assistant is an AI-powered tool that helps HR teams find the right SHL assessment via conversational inputs, semantic search, and RAG. Built with FastAPI, Streamlit, ChromaDB, Hugging Face embeddings, Groq LLM, and LangChain. Live demo: dhruv0126-assessment-recommender-dhruv0126.streamlit.app",
  },
  {
    keywords: ["resume", "screener", "screening", "hiring", "recruit", "forasoftware"],
    answer:
      "AI-Powered Resume Screener is an ongoing research project built at FORASOFTWARE (AI ML Intern, May 2025–Feb 2026). It parses PDF/DOCX/TXT resumes and ranks candidates using TF-IDF, embeddings, and Azure OpenAI LLM scoring. FastAPI backend + React dashboard on Azure. See the case study at /projects/resume-screener.",
  },
  {
    keywords: ["talent", "scout", "hiring assistant", "screening chatbot"],
    answer:
      "Talent Scout Hiring Assistant is an AI-powered hiring chatbot that screens candidates, collects profile details, and generates tailored technical questions based on skills and conversation history. Built with Python, Streamlit, and LLM APIs. GitHub: github.com/Dhruv0126/TalentScout",
  },
  {
    keywords: ["rag", "chatflow", "chatbot", "gemini", "chromadb"],
    answer:
      "RAG ChatFlow is my retrieval-augmented generation project. It supports PDF/TXT upload, chunking, Gemini embeddings, ChromaDB storage, and a Flask backend for grounded answers. Live demo: rag-chatflow-dhruv0126.onrender.com",
  },
  {
    keywords: ["yolo", "vision", "detect", "opencv", "utilities"],
    answer:
      "Utilities YOLOv8 is a custom object detector for kitchen items (spoons, cups, plates) with real-time Streamlit inference for images, video, and webcam.",
  },
  {
    keywords: ["skill", "python", "tensorflow", "langchain", "tech"],
    answer:
      "My core stack: Python, TensorFlow, Scikit-Learn, LangChain, OpenCV, Streamlit, Flask, SQL, and Power BI. I specialize in ML, deep learning, NLP/LLM, and computer vision.",
  },
  {
    keywords: ["education", "university", "gpa", "degree"],
    answer:
      "I'm pursuing a B.Tech in Information Technology at Gautam Buddha University (GPA 9.00/10.00), expected May 2025, Greater Noida.",
  },
  {
    keywords: ["contact", "email", "hire", "reach", "connect"],
    answer:
      "You can email me at dhruv06012@gmail.com, use the contact form on this site, or connect on LinkedIn (dhruvgupta0126) and GitHub (Dhruv0126).",
  },
  {
    keywords: ["project", "portfolio", "work", "build"],
    answer:
      "I've built 7+ AI/ML projects including SHL Assessment Recommender, AI Resume Screener, RAG ChatFlow, Talent Scout Hiring Assistant, YOLOv8 detector, Wine Quality classifier, and BodyFunDetector. Scroll to the Projects section or ask about a specific one!",
  },
  {
    keywords: ["who", "about", "dhruv", "introduce"],
    answer:
      "I'm Dhruv Gupta, an AI/ML Engineer and Generative AI enthusiast. I build RAG systems, computer vision pipelines, and ML products that ship.",
  },
];

export function findAnswer(query) {
  const normalized = query.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const entry of portfolioKnowledge) {
    const score = entry.keywords.reduce(
      (acc, kw) => (normalized.includes(kw) ? acc + 1 : acc),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  if (best) return best.answer;

  return "I can tell you about my projects (SHL Recommender, Resume Screener, RAG ChatFlow, YOLOv8), skills, education, or how to contact me. Try asking something like 'Tell me about your RAG project' or 'How can I hire you?'";
}
