import { useMemo, useState } from "react";

import RetroWindow from "../retro/RetroWindow";
import SkillCategory from "./SkillCategory";
import { skillCategories } from "../../data/skills";

import computerIcon from "../../assets/icons/computer.png";
import folderToolsIcon from "../../assets/icons/folder-tools.png";
import folderCodeIcon from "../../assets/icons/folder-code.png";
import folderDatabaseIcon from "../../assets/icons/folder-database.png";
import folderLinuxIcon from "../../assets/icons/folder-linux.png";


import "./skills-section.css";

function getCategoryIcon(categoryTitle: string) {
  const normalizedTitle = categoryTitle.toLowerCase();

  if (
    normalizedTitle.includes("tool") ||
    normalizedTitle.includes("collaboration")
  ) {
    return folderToolsIcon;
  }

  if (
    normalizedTitle.includes("database") ||
    normalizedTitle.includes("automation") ||
    normalizedTitle.includes("data")
  ) {
    return folderDatabaseIcon;
  }

  if (
    normalizedTitle.includes("linux") ||
    normalizedTitle.includes("system") ||
    normalizedTitle.includes("devops") ||
    normalizedTitle.includes("infrastructure")
  ) {
    return folderLinuxIcon;
  }

  return folderCodeIcon;
}

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
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-heading"
    >
      <div className="skills-section__heading">
        <span className="skills-section__label">
          03 — Technical Toolbox
        </span>

        <h2 id="skills-heading">Skills</h2>

        <p>
          Technologies used across academic, personal, and
          freelance projects, presented as installed development
          components.
        </p>
      </div>

      <RetroWindow
        title="System Properties - Zied Engineering Workstation"
        className="skills-system-properties"
      >
        <nav
          className="skills-system-properties__menu"
          aria-label="System Properties menu"
        >
          <button type="button">
            <span>F</span>ile
          </button>

          <button type="button">
            <span>V</span>iew
          </button>

          <button type="button">
            <span>H</span>elp
          </button>
        </nav>

        <div
          className="skills-system-properties__tabs"
          role="tablist"
          aria-label="System Properties sections"
        >
          <button
            type="button"
            className="skills-system-properties__tab"
          >
            General
          </button>

          <button
            type="button"
            className="skills-system-properties__tab"
          >
            Performance
          </button>

          <button
            type="button"
            className="skills-system-properties__tab skills-system-properties__tab--active"
            aria-selected="true"
          >
            Device Manager
          </button>

          <button
            type="button"
            className="skills-system-properties__tab"
          >
            Hardware Profiles
          </button>
        </div>

        <div className="skills-system-properties__panel">
          <div className="skills-system-properties__intro">
            <span
              className="skills-system-properties__computer-icon"
              aria-hidden="true"
            >
              <img src={computerIcon} alt="" />
            </span>

            <div>
              <strong>ZIED-ENGINEERING-PC</strong>

              <p>
                View technical categories and inspect the
                technologies installed in this portfolio system.
              </p>
            </div>
          </div>

          <div className="skills-system-properties__workspace">
            <aside
              className="skills-system-properties__tree-panel"
              aria-label="Technical skill categories"
            >
              <div className="skills-system-properties__tree">
                <div className="skills-system-properties__tree-root">
                  <span
                    className="skills-system-properties__tree-toggle"
                    aria-hidden="true"
                  >
                    −
                  </span>

                  <span
                    className="skills-system-properties__computer-small-icon"
                    aria-hidden="true"
                  >
                    <img src={computerIcon} alt="" />
                  </span>

                  <strong>ZIED-ENGINEERING-PC</strong>
                </div>

                <div className="skills-system-properties__tree-children">
                  {skillCategories.map((category) => {
                    const isActive =
                      activeCategoryId === category.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        className={
                          isActive
                            ? "skills-system-properties__tree-item skills-system-properties__tree-item--active"
                            : "skills-system-properties__tree-item"
                        }
                        aria-pressed={isActive}
                        onClick={() =>
                          handleSelectCategory(category.id)
                        }
                      >
                        <span
                          className="skills-system-properties__tree-branch"
                          aria-hidden="true"
                        />

                        <span
                          className="skills-system-properties__device-icon"
                          aria-hidden="true"
                        >
                          <img
                            src={getCategoryIcon(category.title)}
                            alt=""
                          />
                        </span>

                        <span>{category.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <main className="skills-system-properties__details-panel">
              {activeCategory ? (
                <>
                  <header className="skills-system-properties__details-header">
                    <div className="skills-system-properties__details-title">
                      <span
                        className="skills-system-properties__category-icon"
                        aria-hidden="true"
                      >
                        <img
                          src={getCategoryIcon(activeCategory.title)}
                          alt=""
                        />
                      </span>

                      <div>
                        <h3>{activeCategory.title}</h3>

                        <p>{activeCategory.description}</p>
                      </div>
                    </div>

                    <div className="skills-system-properties__category-count">
                      <strong>
                        {activeCategory.skills.length}
                      </strong>

                      <span>installed items</span>
                    </div>
                  </header>

                  <div className="skills-system-properties__column-headings">
                    <span>Component</span>
                    <span>Status</span>
                  </div>

                  <SkillCategory
                    category={activeCategory}
                    isActive
                    onSelect={handleSelectCategory}
                  />
                </>
              ) : (
                <div className="skills-system-properties__empty">
                  No technical category selected.
                </div>
              )}
            </main>
          </div>

          <div className="skills-system-properties__summary">
            <div>
              <span>Total components</span>
              <strong>{totalSkills}</strong>
            </div>

            <div>
              <span>Strong</span>
              <strong>{strongSkills}</strong>
            </div>

            <div>
              <span>Working knowledge</span>
              <strong>{workingSkills}</strong>
            </div>

            <div>
              <span>Currently learning</span>
              <strong>{learningSkills}</strong>
            </div>
          </div>
        </div>

        <div className="skills-system-properties__actions">
          <button type="button" className="retro-button">
            Properties
          </button>

          <button type="button" className="retro-button">
            Refresh
          </button>

          <span className="skills-system-properties__actions-spacer" />

          <button type="button" className="retro-button">
            OK
          </button>

          <button type="button" className="retro-button">
            Cancel
          </button>

          <button type="button" className="retro-button" disabled>
            Apply
          </button>
        </div>

        <div className="skills-system-properties__statusbar">
          <span>
            Selected: {activeCategory?.title ?? "None"}
          </span>

          <span>{totalSkills} components detected</span>

          <span>System operating normally</span>
        </div>
      </RetroWindow>
    </section>
  );
}

export default SkillsSection;