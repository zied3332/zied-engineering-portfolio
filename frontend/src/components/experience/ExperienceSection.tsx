import { useState } from "react";
import RetroWindow from "../retro/RetroWindow";
import ExperienceCard from "./ExperienceCard";
import {
  careerSummary,
  experiences,
  type ExperienceStatus,
} from "../../data/experience";
import "./experience-section.css";

const toolbarItems = [
  {
    id: "back",
    label: "Back",
    icon: "←",
  },
  {
    id: "forward",
    label: "Forward",
    icon: "→",
  },
  {
    id: "properties",
    label: "Properties",
    icon: "▤",
  },
  {
    id: "refresh",
    label: "Refresh",
    icon: "↻",
  },
] as const;

function getStatusClassName(status: ExperienceStatus): string {
  return `experience-details__status experience-details__status--${status.toLowerCase()}`;
}

function ExperienceSection() {
  const [selectedExperienceId, setSelectedExperienceId] = useState(
    experiences[0].id,
  );

  const selectedExperience =
    experiences.find(
      (experience) => experience.id === selectedExperienceId,
    ) ?? experiences[0];

  const selectedIndex = experiences.findIndex(
    (experience) => experience.id === selectedExperience.id,
  );

  const handlePreviousExperience = () => {
    const previousIndex =
      selectedIndex <= 0 ? experiences.length - 1 : selectedIndex - 1;

    setSelectedExperienceId(experiences[previousIndex].id);
  };

  const handleNextExperience = () => {
    const nextIndex =
      selectedIndex >= experiences.length - 1 ? 0 : selectedIndex + 1;

    setSelectedExperienceId(experiences[nextIndex].id);
  };

  const handleRefresh = () => {
    setSelectedExperienceId(experiences[0].id);
  };

  const handleToolbarAction = (
    action: (typeof toolbarItems)[number]["id"],
  ) => {
    switch (action) {
      case "back":
        handlePreviousExperience();
        break;

      case "forward":
        handleNextExperience();
        break;

      case "refresh":
        handleRefresh();
        break;

      case "properties":
        document
          .getElementById("experience-details-panel")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        break;

      default:
        break;
    }
  };

  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-section-title"
    >
      <div className="experience-section__container">
        <header className="experience-section__heading">
          <p className="experience-section__eyebrow">
            04 — Career Timeline
          </p>

          <h2 id="experience-section-title">Experience</h2>

          <p className="experience-section__description">
            A system log of my professional work, internships, client
            projects, and long-term engineering direction.
          </p>
        </header>

        <div className="experience-section__window">
          <RetroWindow title="CAREER_HISTORY.EXE - Professional Experience">
            <div className="career-history">
              <nav
                className="career-history__menu"
                aria-label="Career history menu"
              >
                {["File", "Action", "View", "Help"].map((menuItem) => (
                  <button
                    key={menuItem}
                    type="button"
                    className="career-history__menu-button"
                  >
                    {menuItem}
                  </button>
                ))}
              </nav>

              <div
                className="career-history__toolbar"
                role="toolbar"
                aria-label="Career history controls"
              >
                {toolbarItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="career-history__toolbar-button"
                    onClick={() => handleToolbarAction(item.id)}
                    aria-label={item.label}
                  >
                    <span
                      className="career-history__toolbar-icon"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>

                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="career-history__address-bar">
                <span className="career-history__address-label">
                  Address
                </span>

                <div className="career-history__address-field">
                  <span
                    className="career-history__address-icon"
                    aria-hidden="true"
                  >
                    ▣
                  </span>

                  <span>C:\Zied\Career\Experience</span>
                </div>
              </div>

              <div className="career-history__workspace">
                <aside
                  className="career-history__sidebar"
                  aria-label="Career summary"
                >
                  <div className="career-history__sidebar-header">
                    Career Summary
                  </div>

                  <dl className="career-history__summary-list">
                    <div className="career-history__summary-item">
                      <dt>Total roles</dt>
                      <dd>{experiences.length}</dd>
                    </div>

                    <div className="career-history__summary-item">
                      <dt>Freelance jobs completed</dt>
                      <dd>{careerSummary.freelanceJobsCompleted}</dd>
                    </div>

                    <div className="career-history__summary-item">
                      <dt>Current status</dt>
                      <dd>{careerSummary.currentStatus}</dd>
                    </div>

                    <div className="career-history__summary-item">
                      <dt>Main direction</dt>
                      <dd>{careerSummary.mainDirection}</dd>
                    </div>
                  </dl>

                  <div className="career-history__sidebar-note">
                    <span aria-hidden="true">ⓘ</span>

                    <p>
                      Select a log file to inspect its complete professional
                      record.
                    </p>
                  </div>
                </aside>

                <main className="career-history__main">
                  <section
                    className="career-history__file-panel"
                    aria-labelledby="experience-files-title"
                  >
                    <div className="career-history__panel-header">
                      <h3 id="experience-files-title">
                        Experience Log Files
                      </h3>

                      <span>{experiences.length} object(s)</span>
                    </div>

                    <div className="career-history__file-columns">
                      <span>Name</span>
                      <span>Role</span>
                      <span>Period</span>
                    </div>

                    <div className="career-history__file-list">
                      {experiences.map((experience) => (
                        <ExperienceCard
                          key={experience.id}
                          experience={experience}
                          isSelected={
                            selectedExperience.id === experience.id
                          }
                          onSelect={setSelectedExperienceId}
                        />
                      ))}
                    </div>
                  </section>

                  <section
                    id="experience-details-panel"
                    className="experience-details"
                    aria-live="polite"
                    aria-labelledby="selected-experience-title"
                  >
                    <div className="experience-details__title-bar">
                      <div>
                        <span
                          className="experience-details__document-icon"
                          aria-hidden="true"
                        >
                          ▤
                        </span>

                        <span>Log Entry Properties</span>
                      </div>

                      <span>Read Only</span>
                    </div>

                    <div className="experience-details__file-heading">
                      <div
                        className="experience-details__large-icon"
                        aria-hidden="true"
                      >
                        <span className="experience-details__large-icon-fold" />
                        <span className="experience-details__large-icon-line" />
                        <span className="experience-details__large-icon-line" />
                        <span className="experience-details__large-icon-line" />
                      </div>

                      <div>
                        <p className="experience-details__file-name">
                          {selectedExperience.fileName}
                        </p>

                        <h3 id="selected-experience-title">
                          {selectedExperience.title}
                        </h3>

                        <p className="experience-details__organization">
                          {selectedExperience.organization}
                        </p>
                      </div>
                    </div>

                    <div className="experience-details__separator" />

                    <dl className="experience-details__metadata">
                      <div className="experience-details__metadata-row">
                        <dt>Period:</dt>
                        <dd>{selectedExperience.period}</dd>
                      </div>

                      <div className="experience-details__metadata-row">
                        <dt>Location:</dt>
                        <dd>{selectedExperience.location}</dd>
                      </div>

                      <div className="experience-details__metadata-row">
                        <dt>Type:</dt>
                        <dd>{selectedExperience.type}</dd>
                      </div>

                      <div className="experience-details__metadata-row">
                        <dt>Status:</dt>
                        <dd>
                          <span
                            className={getStatusClassName(
                              selectedExperience.status,
                            )}
                          >
                            {selectedExperience.status}
                          </span>
                        </dd>
                      </div>
                    </dl>

                    <div className="experience-details__group">
                      <h4>Summary</h4>

                      <div className="experience-details__document">
                        <p>{selectedExperience.summary}</p>
                      </div>
                    </div>

                    <div className="experience-details__group">
                      <h4>Achievements and Responsibilities</h4>

                      <div className="experience-details__document">
                        <ul className="experience-details__achievement-list">
                          {selectedExperience.achievements.map(
                            (achievement) => (
                              <li key={achievement}>{achievement}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="experience-details__group">
                      <h4>Technologies and Systems</h4>

                      <ul
                        className="experience-details__technology-list"
                        aria-label="Technologies used"
                      >
                        {selectedExperience.technologies.map(
                          (technology) => (
                            <li key={technology}>{technology}</li>
                          ),
                        )}
                      </ul>
                    </div>
                  </section>
                </main>
              </div>

              <footer className="career-history__status-bar">
                <span>
                  {experiences.length} object(s)
                </span>

                <span>
                  Selected: {selectedExperience.fileName}
                </span>

                <span>System ready</span>
              </footer>
            </div>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;