import { useMemo, useState } from "react";
import RetroWindow from "../retro/RetroWindow";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import "./projects-section.css";

type ProjectFilter = "All" | "Full-Stack" | "Automation";

const filters: ProjectFilter[] = [
  "All",
  "Full-Stack",
  "Automation",
];

function ProjectsSection() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  const [selectedProjectId, setSelectedProjectId] = useState(
    projects[0]?.id ?? 0
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    if (activeFilter === "Full-Stack") {
      return projects.filter(
        (project) =>
          project.category.includes("Full-Stack") ||
          project.category.includes("Web")
      );
    }

    return projects.filter(
      (project) =>
        project.category.includes("Automation") ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes("python")
        )
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-section__heading">
        <span className="projects-section__label">
          02 — Selected Work
        </span>

        <h2>Projects</h2>

        <p>
          Full-stack applications, automation tools, and practical
          software projects.
        </p>
      </div>

      <RetroWindow
        title="C:\ZIED\PORTFOLIO\PROJECTS"
        className="projects-explorer"
      >
        <div className="projects-explorer__menu">
          <button type="button">File</button>
          <button type="button">Edit</button>
          <button type="button">View</button>
          <button type="button">Favorites</button>
          <button type="button">Tools</button>
          <button type="button">Help</button>
        </div>

        <div className="projects-explorer__toolbar">
          <button
            type="button"
            className="projects-explorer__toolbar-button"
            aria-label="Go back"
          >
            ←
            <span>Back</span>
          </button>

          <button
            type="button"
            className="projects-explorer__toolbar-button"
            aria-label="Go forward"
          >
            →
            <span>Forward</span>
          </button>

          <button
            type="button"
            className="projects-explorer__toolbar-button"
            aria-label="Move up"
          >
            ↑
            <span>Up</span>
          </button>

          <div className="projects-explorer__toolbar-divider" />

          <span className="projects-explorer__folder-symbol">
            📁
          </span>

          <strong>Projects</strong>
        </div>

        <div className="projects-explorer__address">
          <span>Address</span>

          <div className="projects-explorer__address-field">
            <span aria-hidden="true">📁</span>
            <span>C:\Zied\Portfolio\Projects</span>
          </div>

          <button type="button" className="retro-button">
            Go
          </button>
        </div>

        <div className="projects-explorer__layout">
          <aside className="projects-explorer__sidebar">
            <div className="projects-explorer__sidebar-title">
              Project Tasks
            </div>

            <div className="projects-explorer__sidebar-content">
              <p>Filter projects by category:</p>

              <div className="projects-explorer__filters">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={
                      activeFilter === filter
                        ? "projects-explorer__filter projects-explorer__filter--active"
                        : "projects-explorer__filter"
                    }
                    onClick={() => setActiveFilter(filter)}
                  >
                    <span aria-hidden="true">▸</span>
                    {filter}
                  </button>
                ))}
              </div>

              <div className="projects-explorer__sidebar-divider" />

              <div className="projects-explorer__summary">
                <strong>{filteredProjects.length}</strong>
                <span>
                  {filteredProjects.length === 1
                    ? "project displayed"
                    : "projects displayed"}
                </span>
              </div>
            </div>
          </aside>

          <div className="projects-explorer__content">
            {filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isSelected={
                      selectedProjectId === project.id
                    }
                    onSelect={setSelectedProjectId}
                  />
                ))}
              </div>
            ) : (
              <div className="projects-explorer__empty">
                <span aria-hidden="true">📂</span>
                <p>No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>

        <div className="projects-explorer__statusbar">
          <span>
            {filteredProjects.length} object
            {filteredProjects.length === 1 ? "" : "s"}
          </span>

          <span>Selected: {selectedProjectId ? 1 : 0}</span>

          <span>Portfolio Projects</span>
        </div>
      </RetroWindow>
    </section>
  );
}

export default ProjectsSection;