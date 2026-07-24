import {
  useEffect,
  useMemo,
  useState,
} from "react";

import RetroWindow from "../retro/RetroWindow";
import ProjectCard from "./ProjectCard";

import { projects } from "../../data/projects";

import "./projects-section.css";

type ProjectFilter =
  | "All"
  | "Full-Stack"
  | "Automation";

const filters: ProjectFilter[] = [
  "All",
  "Full-Stack",
  "Automation",
];

function ProjectsSection() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  const [selectedProjectId, setSelectedProjectId] =
    useState(projects[0]?.id ?? 0);

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
          technology
            .toLowerCase()
            .includes("python")
        )
    );
  }, [activeFilter]);

  const selectedProjectIsVisible =
    filteredProjects.some(
      (project) =>
        project.id === selectedProjectId
    );

  useEffect(() => {
    if (filteredProjects.length === 0) {
      setSelectedProjectId(0);
      return;
    }

    if (!selectedProjectIsVisible) {
      setSelectedProjectId(
        filteredProjects[0].id
      );
    }
  }, [
    filteredProjects,
    selectedProjectIsVisible,
  ]);

  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="projects-section__heading">
        <span className="projects-section__label">
          02 — Selected Work
        </span>

        <h2 id="projects-heading">
          Projects
        </h2>

        <p>
          Full-stack applications, automation
          tools, and practical software projects.
        </p>
      </div>

      <RetroWindow
        title={String.raw`C:\ZIED\PORTFOLIO\PROJECTS`}
        className="projects-explorer"
      >
        <nav
          className="retro-menu projects-explorer__menu"
          aria-label="Projects Explorer menu"
        >
          <button type="button">
            <span className="projects-explorer__menu-shortcut">
              F
            </span>
            ile
          </button>

          <button type="button">
            <span className="projects-explorer__menu-shortcut">
              E
            </span>
            dit
          </button>

          <button type="button">
            <span className="projects-explorer__menu-shortcut">
              V
            </span>
            iew
          </button>

          <button type="button">
            <span className="projects-explorer__menu-shortcut">
              H
            </span>
            elp
          </button>
        </nav>

        <div className="retro-addressbar projects-explorer__address">
          <span className="retro-addressbar__label">
            Address
          </span>

          <div
            className="retro-addressbar__field"
            role="textbox"
            aria-label="Current folder address"
            aria-readonly="true"
          >
            <span
              className="projects-explorer__folder-icon"
              aria-hidden="true"
            />

            <span className="retro-addressbar__path">
              {String.raw`C:\Zied\Portfolio\Projects`}
            </span>
          </div>
        </div>

        <div className="projects-explorer__layout">
          <aside
            className="projects-explorer__sidebar"
            aria-label="Project filters"
          >
            <div className="projects-explorer__sidebar-title">
              Project Categories
            </div>

            <div className="projects-explorer__sidebar-content">
              <div className="projects-explorer__task-heading">
                <span
                  className="projects-explorer__folder-icon"
                  aria-hidden="true"
                />

                <span>Browse project folders</span>
              </div>

              <div className="projects-explorer__filters">
                {filters.map((filter) => {
                  const isActive =
                    activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      className={
                        isActive
                          ? "projects-explorer__filter projects-explorer__filter--active"
                          : "projects-explorer__filter"
                      }
                      aria-pressed={isActive}
                      onClick={() =>
                        setActiveFilter(filter)
                      }
                    >
                      <span
                        className="projects-explorer__document-icon"
                        aria-hidden="true"
                      />

                      <span>{filter}</span>
                    </button>
                  );
                })}
              </div>

              <div
                className="projects-explorer__sidebar-divider"
                aria-hidden="true"
              />

              <div className="projects-explorer__summary">
                <span
                  className="projects-explorer__folder-icon"
                  aria-hidden="true"
                />

                <div>
                  <strong>
                    {filteredProjects.length}
                  </strong>

                  <span>
                    {filteredProjects.length === 1
                      ? " project"
                      : " projects"}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <main
            className="projects-explorer__content"
            aria-live="polite"
          >
            <header className="projects-explorer__content-header">
              <div>
                <span>
                  Current folder
                </span>

                <strong>{activeFilter}</strong>
              </div>

              <span>
                {filteredProjects.length} item
                {filteredProjects.length === 1
                  ? ""
                  : "s"}
              </span>
            </header>

            {filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {filteredProjects.map(
                  (project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      isSelected={
                        selectedProjectId ===
                        project.id
                      }
                      onSelect={
                        setSelectedProjectId
                      }
                    />
                  )
                )}
              </div>
            ) : (
              <div className="projects-explorer__empty">
                <span
                  className="projects-explorer__folder-icon projects-explorer__folder-icon--large"
                  aria-hidden="true"
                />

                <p>
                  No projects found in this
                  category.
                </p>
              </div>
            )}
          </main>
        </div>

        <div
          className="retro-statusbar projects-explorer__statusbar"
          role="status"
        >
          <span>
            {filteredProjects.length} object
            {filteredProjects.length === 1
              ? ""
              : "s"}
          </span>

          <span>
            Selected:{" "}
            {selectedProjectIsVisible ? 1 : 0}
          </span>

          <span>
            {activeFilter} Projects
          </span>
        </div>
      </RetroWindow>
    </section>
  );
}

export default ProjectsSection;