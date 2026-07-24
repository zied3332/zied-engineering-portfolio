import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import SkillsSection from "./components/skills/SkillsSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/layout/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="app-main">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;