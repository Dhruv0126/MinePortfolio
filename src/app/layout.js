import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import PortfolioShell from "./components/PortfolioShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Dhruv Gupta | AI/ML Engineer",
  description:
    "AI/ML Engineer building RAG systems, computer vision pipelines, and ML products. Portfolio showcasing SHL Assessment Recommender, Resume Screener, RAG ChatFlow, YOLOv8, and more.",
  keywords: [
    "Dhruv Gupta",
    "AI Engineer",
    "ML Engineer",
    "RAG",
    "Computer Vision",
    "Portfolio",
    "Generative AI",
  ],
  authors: [{ name: "Dhruv Gupta" }],
  openGraph: {
    title: "Dhruv Gupta | AI/ML Engineer",
    description:
      "I build RAG systems, computer vision pipelines, and ML products that ship.",
    url: "https://dhruvgupta.dev",
    siteName: "Dhruv Gupta Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Gupta | AI/ML Engineer",
    description:
      "I build RAG systems, computer vision pipelines, and ML products that ship.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dhruv Gupta",
  jobTitle: "AI/ML Engineer",
  url: "https://dhruvgupta.dev",
  email: "dhruv06012@gmail.com",
  sameAs: [
    "https://github.com/Dhruv0126",
    "https://www.linkedin.com/in/dhruvgupta0126",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Gautam Buddha University",
  },
  knowsAbout: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Retrieval Augmented Generation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} font-sans antialiased bg-[#0a0a0f]`}
      >
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
