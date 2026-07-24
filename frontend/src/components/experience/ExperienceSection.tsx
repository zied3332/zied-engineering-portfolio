import { useMemo, useState } from "react";

import RetroWindow from "../retro/RetroWindow";
import ExperienceCard from "./ExperienceCard";

import {
  careerSummary,
  experiences,
  type ExperienceStatus,
} from "../../data/experience";

import aboutMeFileIcon from "../../assets/icons/about-me-file.png";
import appIcon from "../../assets/icons/app-icon.png";
import profileUserIcon from "../../assets/icons/profile-user.png";
import statusCheckIcon from "../../assets/icons/status-check.png";
import systemComputerIcon from "../../assets/icons/system-computer.png";

import "./experience-section.css";

type ExperienceTab =
  | "Overview"
  | "Achievements"
  | "Technologies";

function getStatusClassName(
  status: ExperienceStatus
): string {
  return `experience-viewer__status experience-viewer__status--${status.toLowerCase()}`;
}

function ExperienceSection() {
  const [selectedExperienceId, setSelectedExperienceId] =
    useState(experiences[0]?.id ?? 0);

  const [activeTab, setActiveTab] =
    useState<ExperienceTab>("Overview");

  const selectedExperience = useMemo(
    () =>
      experiences.find(
        (experience) =>
          experience.id === selectedExperienceId
      ) ?? experiences[0],
    [selectedExperienceId]
  );

  const activeExperiences = experiences.filter(
    (experience) => experience.status === "Current"
  ).length;

  const handleSelectExperience = (
    experienceId: number
  ) => {
    setSelectedExperienceId(experienceId);
    setActiveTab("Overview");
  };

  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-heading"
    >
      <header className="experience-section__heading">
        <span className="experience-section__label">
          04 — Career Timeline
        </span>

        <h2 id="experience-heading">Experience</h2>

        <p>
          A chronological record of internships, freelance work,
          engineering projects, and professional development.
        </p>
      </header>

      <RetroWindow
        title="Career Event Viewer - Read Only"
        className="experience-viewer"
      >
        <nav
          className="experience-viewer__menu"
          aria-label="Career Event Viewer menu"
        >
          <button type="button">
            <span>F</span>ile
          </button>

          <button type="button">
            <span>A</span>ction
          </button>

          <button type="button">
            <span>V</span>iew
          </button>

          <button type="button">
            <span>H</span>elp
          </button>
        </nav>

        <div className="experience-viewer__toolbar">
          <div className="experience-viewer__toolbar-title">
            <span
              className="experience-viewer__toolbar-image"
              aria-hidden="true"
            >
              <img src={aboutMeFileIcon} alt="" />
            </span>

            <div>
              <strong>Professional Experience Log</strong>
              <span>ZIED-ENGINEERING-PC</span>
            </div>
          </div>

          <div className="experience-viewer__toolbar-details">
            <span>Read-only career database</span>

            <strong>
              {experiences.length} entries detected
            </strong>
          </div>
        </div>

        <div className="experience-viewer__workspace">
          <aside
            className="experience-viewer__log-panel"
            aria-label="Career log entries"
          >
            <div className="experience-viewer__log-header">
              <div>
                <strong>Career Log</strong>
                <span>{experiences.length} entries</span>
              </div>

              <span
                className="experience-viewer__read-only"
                aria-label="Read-only log"
              >
                Read Only
              </span>
            </div>

            <div className="experience-viewer__column-header">
              <span>Entry</span>
              <span>Status</span>
            </div>

            <div className="experience-viewer__log-list">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  entryNumber={experiences.length - index}
                  isSelected={
                    selectedExperience?.id === experience.id
                  }
                  onSelect={handleSelectExperience}
                />
              ))}
            </div>

            <div className="experience-viewer__log-summary">
              <div>
                <span>Total roles</span>
                <strong>{experiences.length}</strong>
              </div>

              <div>
                <span>Active</span>
                <strong>{activeExperiences}</strong>
              </div>

              <div>
                <span>Freelance jobs</span>
                <strong>
                  {careerSummary.freelanceJobsCompleted}
                </strong>
              </div>
            </div>
          </aside>

          <main
            className="experience-viewer__entry-panel"
            aria-live="polite"
          >
            {selectedExperience ? (
              <>
                <header className="experience-viewer__entry-header">
                  <div className="experience-viewer__entry-identity">
                    <span
                      className="experience-viewer__entry-icon"
                      aria-hidden="true"
                    >
                      <img src={profileUserIcon} alt="" />
                    </span>

                    <div>
                      <span className="experience-viewer__entry-label">
                        Selected log entry
                      </span>

                      <h3>{selectedExperience.title}</h3>

                      <p>
                        {selectedExperience.organization}
                      </p>
                    </div>
                  </div>

                  <span
                    className={getStatusClassName(
                      selectedExperience.status
                    )}
                  >
                    {selectedExperience.status}
                  </span>
                </header>

                <div
                  className="experience-viewer__tabs"
                  role="tablist"
                  aria-label="Experience information"
                >
                  {(
                    [
                      "Overview",
                      "Achievements",
                      "Technologies",
                    ] as ExperienceTab[]
                  ).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      className={
                        activeTab === tab
                          ? "experience-viewer__tab experience-viewer__tab--active"
                          : "experience-viewer__tab"
                      }
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="experience-viewer__entry-content">
                  {activeTab === "Overview" && (
                    <div className="experience-viewer__overview">
                      <div className="experience-viewer__content-heading">
                        <span
                          className="experience-viewer__content-image"
                          aria-hidden="true"
                        >
                          <img src={aboutMeFileIcon} alt="" />
                        </span>

                        <div>
                          <h4>Experience Properties</h4>

                          <p>
                            Information stored in the selected
                            career log entry.
                          </p>
                        </div>
                      </div>

                      <dl className="experience-viewer__properties">
                        <div>
                          <dt>Log file</dt>
                          <dd>
                            {selectedExperience.fileName}
                          </dd>
                        </div>

                        <div>
                          <dt>Organization</dt>
                          <dd>
                            {selectedExperience.organization}
                          </dd>
                        </div>

                        <div>
                          <dt>Period</dt>
                          <dd>
                            {selectedExperience.period}
                          </dd>
                        </div>

                        <div>
                          <dt>Location</dt>
                          <dd>
                            {selectedExperience.location}
                          </dd>
                        </div>

                        <div>
                          <dt>Experience type</dt>
                          <dd>{selectedExperience.type}</dd>
                        </div>

                        <div>
                          <dt>Access</dt>
                          <dd>Read only</dd>
                        </div>
                      </dl>

                      <fieldset className="experience-viewer__group">
                        <legend>Entry description</legend>

                        <p>{selectedExperience.summary}</p>
                      </fieldset>

                      <fieldset className="experience-viewer__group">
                        <legend>Career context</legend>

                        <dl className="experience-viewer__career-context">
                          <div>
                            <dt>Current status</dt>
                            <dd>
                              {careerSummary.currentStatus}
                            </dd>
                          </div>

                          <div>
                            <dt>Main direction</dt>
                            <dd>
                              {careerSummary.mainDirection}
                            </dd>
                          </div>
                        </dl>
                      </fieldset>
                    </div>
                  )}

                  {activeTab === "Achievements" && (
                    <div className="experience-viewer__tab-content">
                      <div className="experience-viewer__content-heading">
                        <span
                          className="experience-viewer__content-image"
                          aria-hidden="true"
                        >
                          <img src={statusCheckIcon} alt="" />
                        </span>

                        <div>
                          <h4>
                            Achievements and Responsibilities
                          </h4>

                          <p>
                            Recorded outcomes from this
                            experience.
                          </p>
                        </div>
                      </div>

                      <ul className="experience-viewer__achievement-list">
                        {selectedExperience.achievements.map(
                          (achievement, index) => (
                            <li key={achievement}>
                              <span>{index + 1}</span>
                              <p>{achievement}</p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {activeTab === "Technologies" && (
                    <div className="experience-viewer__tab-content">
                      <div className="experience-viewer__content-heading">
                        <span
                          className="experience-viewer__content-image"
                          aria-hidden="true"
                        >
                          <img
                            src={systemComputerIcon}
                            alt=""
                          />
                        </span>

                        <div>
                          <h4>Technologies and Systems</h4>

                          <p>
                            Tools associated with this
                            professional entry.
                          </p>
                        </div>
                      </div>

                      <div className="experience-viewer__technology-list">
                        {selectedExperience.technologies.map(
                          (technology) => (
                            <div
                              key={technology}
                              className="experience-viewer__technology"
                            >
                              <span
                                className="experience-viewer__technology-icon"
                                aria-hidden="true"
                              >
                                <img src={appIcon} alt="" />
                              </span>

                              <div>
                                <strong>{technology}</strong>

                                <span>
                                  Installed career component
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="experience-viewer__entry-actions">
                  <span>
                    Double-click a career entry to inspect its
                    properties.
                  </span>

                  <button
                    type="button"
                    className="retro-button"
                    onClick={() => setActiveTab("Overview")}
                  >
                    Properties
                  </button>
                </div>
              </>
            ) : (
              <div className="experience-viewer__empty">
                No career log entry selected.
              </div>
            )}
          </main>
        </div>

        <footer
          className="experience-viewer__statusbar"
          role="status"
        >
          <span>{experiences.length} log entries</span>

          <span>
            Selected:{" "}
            {selectedExperience?.fileName ?? "None"}
          </span>

          <span>Career log ready</span>
        </footer>
      </RetroWindow>
    </section>
  );
}

export default ExperienceSection;