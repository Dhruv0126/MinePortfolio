import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BentoGrid from "./components/BentoGrid";
import FeaturedProjectsScroll from "./components/FeaturedProjectsScroll";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import GithubStats from "./components/GithubStats";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 md:px-12 py-4 max-w-6xl">
        <HeroSection />
        <BentoGrid />
        <FeaturedProjectsScroll />
        <AboutSection />
        <GithubStats />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
