import { useEffect, useMemo, useState } from "react";
import RetroWindow from "../retro/RetroWindow";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

import backIcon from "../../assets/icons/back.png";
import forwardIcon from "../../assets/icons/forward.png";
import upIcon from "../../assets/icons/up.png";
import cutIcon from "../../assets/icons/cut.png";
import copyIcon from "../../assets/icons/copy.png";
import pasteIcon from "../../assets/icons/paste.png";
import undoIcon from "../../assets/icons/undo.png";
import deleteIcon from "../../assets/icons/delete.png";
import propertiesIcon from "../../assets/icons/properties.png";
import viewsIcon from "../../assets/icons/views.png";
import folderIcon from "../../assets/icons/folder.png";
import documentIcon from "../../assets/icons/document.png";

import "./projects-section.css";

type ProjectFilter = "All" | "Full-Stack" | "Automation";

type ToolbarButton = {
  label: string;
  icon: string;
  disabled?: boolean;
};

const filters: ProjectFilter[] = [
  "All",
  "Full-Stack",
  "Automation",
];

const navigationButtons: ToolbarButton[] = [
  {
    label: "Back",
    icon: backIcon,
  },
  {
    label: "Forward",
    icon: forwardIcon,
    disabled: true,
  },
  {
    label: "Up",
    icon: upIcon,
  },
];

const fileButtons: ToolbarButton[] = [
  {
    label: "Cut",
    icon: cutIcon,
  },
  {
    label: "Copy",
    icon: copyIcon,
  },
  {
    label: "Paste",
    icon: pasteIcon,
    disabled: true,
  },
];

const actionButtons: ToolbarButton[] = [
  {
    label: "Undo",
    icon: undoIcon,
    disabled: true,
  },
  {
    label: "Delete",
    icon: deleteIcon,
  },
  {
    label: "Properties",
    icon: propertiesIcon,
  },
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

  const selectedProjectIsVisible = filteredProjects.some(
    (project) => project.id === selectedProjectId
  );

  useEffect(() => {
    if (filteredProjects.length === 0) {
      setSelectedProjectId(0);
      return;
    }

    if (!selectedProjectIsVisible) {
      setSelectedProjectId(filteredProjects[0].id);
    }
  }, [filteredProjects, selectedProjectIsVisible]);

  const handleToolbarAction = (label: string) => {
    if (label === "Back" || label === "Up") {
      document
        .querySelector("#projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

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

        <h2 id="projects-heading">Projects</h2>

        <p>
          Full-stack applications, automation tools, and practical
          software projects.
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
              G
            </span>
            o
          </button>

          <button type="button">
            F
            <span className="projects-explorer__menu-shortcut">
              a
            </span>
            vorites
          </button>

          <button type="button">
            <span className="projects-explorer__menu-shortcut">
              T
            </span>
            ools
          </button>

          <button type="button">
            <span className="projects-explorer__menu-shortcut">
              H
            </span>
            elp
          </button>
        </nav>

        <div
          className="retro-toolbar projects-explorer__toolbar"
          role="toolbar"
          aria-label="Projects Explorer toolbar"
        >
          {navigationButtons.map((button) => (
            <button
              key={button.label}
              type="button"
              className="retro-toolbar__button"
              disabled={button.disabled}
              onClick={() => handleToolbarAction(button.label)}
            >
              <img
                src={button.icon}
                alt=""
                aria-hidden="true"
              />
              <span>{button.label}</span>
            </button>
          ))}

          <span
            className="retro-toolbar__separator"
            aria-hidden="true"
          />

          {fileButtons.map((button) => (
            <button
              key={button.label}
              type="button"
              className="retro-toolbar__button"
              disabled={button.disabled}
            >
              <img
                src={button.icon}
                alt=""
                aria-hidden="true"
              />
              <span>{button.label}</span>
            </button>
          ))}

          <span
            className="retro-toolbar__separator"
            aria-hidden="true"
          />

          {actionButtons.map((button) => (
            <button
              key={button.label}
              type="button"
              className="retro-toolbar__button"
              disabled={button.disabled}
            >
              <img
                src={button.icon}
                alt=""
                aria-hidden="true"
              />
              <span>{button.label}</span>
            </button>
          ))}

          <span
            className="retro-toolbar__separator"
            aria-hidden="true"
          />

          <button
            type="button"
            className="retro-toolbar__button"
            aria-label="Change project view"
          >
            <img src={viewsIcon} alt="" aria-hidden="true" />
            <span>Views</span>
          </button>
        </div>

        <div className="retro-addressbar projects-explorer__address">
          <span className="retro-addressbar__label">Address</span>

          <div
            className="retro-addressbar__field"
            role="textbox"
            aria-label="Current folder address"
            aria-readonly="true"
          >
            <img
              src={folderIcon}
              alt=""
              aria-hidden="true"
            />

            <span className="retro-addressbar__path">
              {String.raw`C:\Zied\Portfolio\Projects`}
            </span>

            <span
              className="projects-explorer__address-arrow"
              aria-hidden="true"
            />
          </div>

          <button
            type="button"
            className="projects-explorer__go-button retro-button"
          >
            Go
          </button>
        </div>

        <div className="projects-explorer__layout">
          <aside
            className="projects-explorer__sidebar"
            aria-label="Project filters"
          >
            <div className="projects-explorer__sidebar-title">
              Project Tasks
            </div>

            <div className="projects-explorer__sidebar-content">
              <div className="projects-explorer__task-heading">
                <img
                  src={folderIcon}
                  alt=""
                  aria-hidden="true"
                />

                <span>Filter projects by category</span>
              </div>

              <div className="projects-explorer__filters">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;

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
                      onClick={() => setActiveFilter(filter)}
                    >
                      <img
                        src={documentIcon}
                        alt=""
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
                <img
                  src={folderIcon}
                  alt=""
                  aria-hidden="true"
                />

                <div>
                  <strong>{filteredProjects.length}</strong>

                  <span>
                    {filteredProjects.length === 1
                      ? " project displayed"
                      : " projects displayed"}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <div
            className="projects-explorer__content"
            aria-live="polite"
          >
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
                <img
                  src={folderIcon}
                  alt=""
                  aria-hidden="true"
                />

                <p>No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>

        <div
          className="retro-statusbar projects-explorer__statusbar"
          role="status"
        >
          <span>
            {filteredProjects.length} object
            {filteredProjects.length === 1 ? "" : "s"}
          </span>

          <span>
            Selected: {selectedProjectIsVisible ? 1 : 0}
          </span>

          <span>Portfolio Projects</span>
        </div>
      </RetroWindow>
    </section>
  );
}

export default ProjectsSection;
