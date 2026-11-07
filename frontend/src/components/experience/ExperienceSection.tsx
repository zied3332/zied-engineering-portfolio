import { useMemo, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { careerSummary, experiences } from "../../data/experience";
import "./experience-section.css";

type ExperienceTab = "Overview" | "Achievements" | "Technologies";

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
    <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
      <header className="experience-section__heading">
        <span className="experience-section__label">04 — Career Timeline</span>
        <h2 id="experience-heading">Experience</h2>
        <p>A chronological record of internships, freelance work, engineering projects, and professional development.</p>
      </header>
      <div className="experience-viewer__workspace">
        <aside className="experience-viewer__log-panel" aria-label="Career entries">
          <h3>Professional Experience</h3>
          <p>{experiences.length} entries</p>
          <div className="experience-viewer__log-list">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                entryNumber={experiences.length - index}
                isSelected={selectedExperience?.id === experience.id}
                onSelect={handleSelectExperience}
              />
            ))}
          </div>
          <dl className="experience-viewer__log-summary">
            <div><dt>Total roles</dt><dd>{experiences.length}</dd></div>
            <div><dt>Active</dt><dd>{activeExperiences}</dd></div>
            <div><dt>Freelance jobs</dt><dd>{careerSummary.freelanceJobsCompleted}</dd></div>
          </dl>
        </aside>
        <div className="experience-viewer__entry-panel" aria-live="polite">
          {selectedExperience ? (
            <>
              <header className="experience-viewer__entry-header">
                <h3>{selectedExperience.title}</h3>
                <p>{selectedExperience.organization}</p>
                <span>{selectedExperience.status}</span>
              </header>
              <div className="experience-viewer__tabs" role="tablist" aria-label="Experience information">
                {(["Overview", "Achievements", "Technologies"] as ExperienceTab[]).map((tab) => (
                  <button key={tab} type="button" role="tab"
                    id={"experience-tab-" + tab.toLowerCase()}
                    aria-controls="experience-panel"
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}>
                    {tab}
                  </button>
                ))}
              </div>
              <div id="experience-panel" className="experience-viewer__entry-content" role="tabpanel"
                aria-labelledby={"experience-tab-" + activeTab.toLowerCase()} tabIndex={0}>
                {activeTab === "Overview" && (
                  <>
                    <h4>Experience Properties</h4>
                    <dl className="experience-viewer__properties">
                      <div><dt>Log file</dt><dd>{selectedExperience.fileName}</dd></div>
                      <div><dt>Organization</dt><dd>{selectedExperience.organization}</dd></div>
                      <div><dt>Period</dt><dd>{selectedExperience.period}</dd></div>
                      <div><dt>Location</dt><dd>{selectedExperience.location}</dd></div>
                      <div><dt>Experience type</dt><dd>{selectedExperience.type}</dd></div>
                      <div><dt>Access</dt><dd>Read only</dd></div>
                    </dl>
                    <h4>Entry description</h4>
                    <p>{selectedExperience.summary}</p>
                    <h4>Career context</h4>
                    <dl className="experience-viewer__properties">
                      <div><dt>Current status</dt><dd>{careerSummary.currentStatus}</dd></div>
                      <div><dt>Main direction</dt><dd>{careerSummary.mainDirection}</dd></div>
                    </dl>
                  </>
                )}
                {activeTab === "Achievements" && (
                  <>
                    <h4>Achievements and Responsibilities</h4>
                    <p>Recorded outcomes from this experience.</p>
                    <ol className="experience-viewer__achievement-list">
                      {selectedExperience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                    </ol>
                  </>
                )}
                {activeTab === "Technologies" && (
                  <>
                    <h4>Technologies and Systems</h4>
                    <p>Tools associated with this professional entry.</p>
                    <ul className="experience-viewer__technology-list">
                      {selectedExperience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                  </>
                )}
              </div>
              <div className="experience-viewer__entry-actions">
                <button type="button" className="retro-button" onClick={() => setActiveTab("Overview")}>Properties</button>
              </div>
            </>
          ) : <p>No career log entry selected.</p>}
        </div>
      </div>
      <div className="experience-viewer__statusbar" role="status">
        <span>{experiences.length} entries</span>
        <span>Selected: {selectedExperience?.fileName ?? "None"}</span>
      </div>
    </section>
  );
}

export default ExperienceSection;
