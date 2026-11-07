import { useMemo, useState } from "react";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "../../data/skills";
import "./skills-section.css";

function SkillsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    skillCategories[0]?.id ?? ""
  );

  const activeCategory = useMemo(
    () =>
      skillCategories.find(
        (category) => category.id === activeCategoryId
      ) ?? skillCategories[0],
    [activeCategoryId]
  );

  const totalSkills = useMemo(
    () =>
      skillCategories.reduce(
        (total, category) => total + category.skills.length,
        0
      ),
    []
  );

  const strongSkills = useMemo(
    () =>
      skillCategories.reduce(
        (total, category) =>
          total +
          category.skills.filter(
            (skill) => skill.level === "Strong"
          ).length,
        0
      ),
    []
  );

  const workingSkills = useMemo(
    () =>
      skillCategories.reduce(
        (total, category) =>
          total +
          category.skills.filter(
            (skill) => skill.level === "Working Knowledge"
          ).length,
        0
      ),
    []
  );

  const learningSkills =
    totalSkills - strongSkills - workingSkills;

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="skills-section__heading">
        <span className="skills-section__label">03 — Technical Toolbox</span>
        <h2 id="skills-heading">Skills</h2>
        <p>Technologies used across academic, personal, and freelance projects.</p>
      </div>
      <div className="skills-system-properties__workspace">
        <nav className="skills-system-properties__tree-panel" aria-label="Technical skill categories">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="skills-system-properties__tree-item"
              aria-pressed={activeCategoryId === category.id}
              onClick={() => handleSelectCategory(category.id)}
            >
              {category.title}
            </button>
          ))}
        </nav>
        <div className="skills-system-properties__details-panel" aria-live="polite">
          {activeCategory ? (
            <>
              <header className="skills-system-properties__details-header">
                <h3>{activeCategory.title}</h3>
                <p>{activeCategory.description}</p>
                <p>{activeCategory.skills.length} items</p>
              </header>
              <SkillCategory category={activeCategory} />
            </>
          ) : (
            <p>No technical category selected.</p>
          )}
        </div>
      </div>
      <dl className="skills-system-properties__summary">
        <div><dt>Total components</dt><dd>{totalSkills}</dd></div>
        <div><dt>Strong</dt><dd>{strongSkills}</dd></div>
        <div><dt>Working knowledge</dt><dd>{workingSkills}</dd></div>
        <div><dt>Currently learning</dt><dd>{learningSkills}</dd></div>
      </dl>
    </section>
  );
}

export default SkillsSection;
