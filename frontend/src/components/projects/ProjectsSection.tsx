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
        title="Project collection"
        className="projects-explorer"
      >
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

                <span>Browse project categories</span>
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

                      <span>{filter}</span>
                    </button>
                  );
                })}
              </div>

              <div className="projects-explorer__summary">

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

          <div
            className="projects-explorer__content"
            aria-live="polite"
          >
            <header className="projects-explorer__content-header">
              <div>
                <span>
                  Current category
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

                <p>
                  No projects found in this
                  category.
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          className="retro-statusbar projects-explorer__statusbar"
          role="status"
        >
          <span>
            {filteredProjects.length} project
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