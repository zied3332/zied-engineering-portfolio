import { useMemo, useState } from "react";
import RetroWindow from "../retro/RetroWindow";
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

  const learningSkills = totalSkills - strongSkills - workingSkills;

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId((currentCategoryId) =>
      currentCategoryId === categoryId
        ? currentCategoryId
        : categoryId
    );
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-section__heading">
        <span className="skills-section__label">
          03 — Technical Toolbox
        </span>

        <h2>Skills</h2>

        <p>
          Technologies I have used in academic, personal, and
          freelance projects, together with tools I am actively
          learning.
        </p>
      </div>

      <RetroWindow
        title="CONTROL PANEL - Technical Skills"
        className="skills-control-panel"
      >
        <div className="skills-control-panel__menu">
          <button type="button">File</button>
          <button type="button">Edit</button>
          <button type="button">View</button>
          <button type="button">Help</button>
        </div>

        <div className="skills-control-panel__toolbar">
          <button
            type="button"
            className="skills-control-panel__toolbar-button"
          >
            <span aria-hidden="true">←</span>
            Back
          </button>

          <button
            type="button"
            className="skills-control-panel__toolbar-button"
          >
            <span aria-hidden="true">↑</span>
            Up
          </button>

          <div className="skills-control-panel__toolbar-divider" />

          <div className="skills-control-panel__toolbar-location">
            <span aria-hidden="true">⚙</span>
            <strong>Technical Skills</strong>
          </div>
        </div>

        <div className="skills-control-panel__address">
          <span>Address</span>

          <div className="skills-control-panel__address-field">
            <span aria-hidden="true">⚙</span>
            <span>
              Control Panel\Portfolio\Technical Skills
            </span>
          </div>
        </div>

        <div className="skills-control-panel__layout">
          <aside className="skills-control-panel__sidebar">
            <div className="skills-control-panel__sidebar-box">
              <div className="skills-control-panel__sidebar-title">
                Control Panel
              </div>

              <div className="skills-control-panel__sidebar-content">
                <p>
                  Select a category to view its installed
                  technologies.
                </p>

                <div className="skills-control-panel__stats">
                  <div>
                    <strong>{totalSkills}</strong>
                    <span>Total skills</span>
                  </div>

                  <div>
                    <strong>{strongSkills}</strong>
                    <span>Strong</span>
                  </div>

                  <div>
                    <strong>{workingSkills}</strong>
                    <span>Used</span>
                  </div>

                  <div>
                    <strong>{learningSkills}</strong>
                    <span>Learning</span>
                  </div>
                </div>
              </div>
            </div>

            {activeCategory && (
              <div className="skills-control-panel__details">
                <span
                  className="skills-control-panel__details-icon"
                  aria-hidden="true"
                >
                  {activeCategory.icon}
                </span>

                <strong>{activeCategory.title}</strong>

                <p>{activeCategory.description}</p>
              </div>
            )}
          </aside>

          <div className="skills-control-panel__content">
            <div className="skills-control-panel__content-header">
              <div>
                <h3>Technical Skills</h3>
                <p>
                  Select a category below to inspect its tools and
                  technologies.
                </p>
              </div>

              <span>
                {skillCategories.length} categories
              </span>
            </div>

            <div className="skills-control-panel__categories">
              {skillCategories.map((category) => (
                <SkillCategory
                  key={category.id}
                  category={category}
                  isActive={activeCategoryId === category.id}
                  onSelect={handleSelectCategory}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="skills-control-panel__legend">
          <div>
            <span className="skills-control-panel__legend-color skills-control-panel__legend-color--strong" />
            Strong
          </div>

          <div>
            <span className="skills-control-panel__legend-color skills-control-panel__legend-color--used" />
            Working knowledge
          </div>

          <div>
            <span className="skills-control-panel__legend-color skills-control-panel__legend-color--learning" />
            Currently learning
          </div>
        </div>

        <div className="skills-control-panel__statusbar">
          <span>{totalSkills} installed technologies</span>
          <span>
            Selected: {activeCategory?.title ?? "None"}
          </span>
          <span>Zied Skills Manager</span>
        </div>
      </RetroWindow>
    </section>
  );
}

export default SkillsSection;