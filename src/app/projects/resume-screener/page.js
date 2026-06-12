import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "AI-Powered Resume Screener Case Study | Dhruv Gupta",
  description:
    "Deep dive into an AI resume screening system built with React, FastAPI, and Azure OpenAI — hybrid NLP ranking for recruiter analytics.",
};

const stack = [
  "React",
  "FastAPI",
  "Azure OpenAI",
  "Blob Storage",
  "Redis",
  "TF-IDF",
  "Embeddings",
];

const metrics = [
  { label: "Resume formats", value: "PDF · DOCX · TXT" },
  { label: "Ranking", value: "Hybrid NLP" },
  { label: "Platform", value: "Azure Cloud" },
];

const pipelineSteps = [
  {
    step: "01",
    title: "Document ingestion",
    detail:
      "Recruiters upload resumes in PDF, DOCX, or TXT. Files are stored in Azure Blob Storage with metadata for batch and role-based screening runs.",
  },
  {
    step: "02",
    title: "Parsing & extraction",
    detail:
      "A parsing layer extracts skills, experience, education, and role keywords into structured candidate profiles for downstream scoring.",
  },
  {
    step: "03",
    title: "Hybrid ranking",
    detail:
      "TF-IDF captures keyword overlap with job descriptions, embeddings measure semantic fit, and Azure OpenAI LLM scoring adds explainable final ranking.",
  },
  {
    step: "04",
    title: "Recruiter analytics",
    detail:
      "A React dashboard surfaces ranked shortlists, score breakdowns, and screening trends with Redis-backed caching for faster repeat queries.",
  },
];

export default function ResumeScreenerCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <article className="container max-w-3xl mx-auto mt-28 px-6 md:px-12 py-8">
        <Link
          href="/#projects"
          className="font-mono text-sm text-accent-cyan hover:text-white transition-colors"
        >
          ← Back to projects
        </Link>

        <header className="mt-8 mb-12">
          <span className="font-mono text-xs text-accent-cyan">{"// case study"}</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 text-balance">
            AI-Powered Resume Screener
          </h1>
          <p className="text-[#ADB7BE] mt-2 font-mono text-sm">
            FORASOFTWARE · AI ML Intern · May 2025 – Feb 2026 · Greater Noida, UP
          </p>
          <p className="text-[#ADB7BE] mt-4 text-lg text-pretty">
            Built an AI resume screening system to parse PDF/DOCX/TXT resumes, extract key
            skills and experience, and rank candidates using a hybrid NLP approach (TF-IDF,
            embeddings, and LLM scoring). Developed a FastAPI backend and React dashboard
            integrated with Microsoft Azure services for intelligent candidate ranking and
            recruiter analytics.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-5 py-2 rounded-full border border-accent-cyan/40 text-accent-cyan text-sm font-mono">
              Online ongoing research project
            </span>
            <a
              href="https://github.com/Dhruv0126"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:border-accent-cyan transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </header>

        <div className="glass-card overflow-hidden mb-12 relative h-64 md:h-96">
          <Image
            src="/images/projects/AI_Powered Resume Screener.png"
            alt="AI-Powered Resume Screener — project thumbnail"
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="space-y-12 text-[#ADB7BE]">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">Problem</h2>
            <p className="leading-relaxed">
              Recruiters handling high-volume hiring pipelines need to quickly parse diverse
              resume formats, surface relevant skills, and rank candidates consistently. Manual
              screening is slow, subjective, and difficult to scale across large applicant pools —
              especially when job descriptions evolve and teams need explainable shortlists.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Research Scenario
            </h2>
            <p className="leading-relaxed mb-6">
              The core research question: can a hybrid NLP pipeline outperform single-method
              resume ranking in real hiring workflows? I evaluated three complementary signals —
              lexical overlap (TF-IDF), semantic similarity (embeddings), and LLM-based reasoning
              (Azure OpenAI) — to balance precision, recall, and recruiter trust. Early experiments
              showed TF-IDF alone missed paraphrased skills, embeddings alone over-weighted generic
              phrases, and LLM-only scoring was slower and less consistent at scale. The hybrid
              ensemble became the production direction.
            </p>
            <div className="space-y-4">
              {pipelineSteps.map((item) => (
                <div key={item.step} className="glass-card p-5 flex gap-4">
                  <span className="font-mono text-accent-cyan text-sm shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-white">{item.title}</h3>
                    <p className="text-sm mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">Solution</h2>
            <p className="leading-relaxed mb-4">
              Designed a full-stack screening platform with a FastAPI backend and React dashboard.
              The system ingests PDF, DOCX, and TXT resumes, extracts structured candidate data,
              and applies a hybrid ranking pipeline combining TF-IDF keyword matching, semantic
              embeddings, and Azure OpenAI LLM scoring. Azure Blob Storage handles document
              persistence while Redis supports caching and session analytics for recruiter
              dashboards.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Behind the Project
            </h2>
            <p className="leading-relaxed mb-4">
              This project was built during my AI/ML internship at FORASOFTWARE (May 2025 – Feb
              2026) in Greater Noida. It sits alongside other production-minded work from the same
              role, including HealthFora — a healthcare platform connecting patients, doctors,
              pharmacies, and hospitals with user dashboards, an AI chatbot, digital prescriptions
              with secure pickup codes, and a verified onboarding flow.
            </p>
            <p className="leading-relaxed">
              The resume screener remains an active research effort: I am iterating on scoring
              weights, evaluation metrics against labeled shortlists, and Azure deployment
              hardening before a public demo release. Source code for this initiative is not yet
              public; explore my broader work on{" "}
              <a
                href="https://github.com/Dhruv0126"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:text-white transition-colors"
              >
                GitHub
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="glass-card p-4 text-center">
                  <p className="font-heading text-lg font-bold text-white">{m.value}</p>
                  <p className="text-xs mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">Lessons Learned</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Hybrid NLP (classical + embedding + LLM) outperforms any single scoring method for
                resume ranking
              </li>
              <li>
                Azure OpenAI integration requires careful prompt design for consistent, explainable
                candidate scores
              </li>
              <li>
                Separating document ingestion, feature extraction, and ranking into modular
                services improves maintainability
              </li>
              <li>
                Recruiter-facing analytics matter as much as model accuracy — transparency builds
                adoption
              </li>
            </ul>
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
