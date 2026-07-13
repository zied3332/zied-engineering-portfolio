import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import SkillsSection from "./components/skills/SkillsSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <section className="section temporary-intro">
          <p className="temporary-intro__label">
            ZIED_PORTFOLIO.EXE
          </p>

          <h1>Zied Alimi</h1>

          <p>
            Computer Engineering Student · Full-Stack Developer ·
            Python Automation
          </p>
        </section>

        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
      </main>

      <Footer />
    </>
  );
}

export default App;