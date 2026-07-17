import { useEffect, useMemo, useState } from "react";
import RetroWindow from "../retro/RetroWindow";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import "./projects-section.css";

type ProjectFilter = "All" | "Full-Stack" | "Automation";

type ToolbarIcon =
  | "back"
  | "forward"
  | "up"
  | "cut"
  | "copy"
  | "paste"
  | "undo"
  | "delete"
  | "properties"
  | "views";

type ToolbarButton = {
  label: string;
  icon: ToolbarIcon;
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
    icon: "back",
  },
  {
    label: "Forward",
    icon: "forward",
    disabled: true,
  },
  {
    label: "Up",
    icon: "up",
  },
];

const fileButtons: ToolbarButton[] = [
  {
    label: "Cut",
    icon: "cut",
  },
  {
    label: "Copy",
    icon: "copy",
  },
  {
    label: "Paste",
    icon: "paste",
    disabled: true,
  },
];

const actionButtons: ToolbarButton[] = [
  {
    label: "Undo",
    icon: "undo",
    disabled: true,
  },
  {
    label: "Delete",
    icon: "delete",
  },
  {
    label: "Properties",
    icon: "properties",
  },
];

function ToolbarIconElement({
  icon,
}: {
  icon: ToolbarIcon;
}) {
  return (
    <span
      className={`projects-explorer__toolbar-icon projects-explorer__toolbar-icon--${icon}`}
      aria-hidden="true"
    />
  );
}

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

  const renderToolbarButton = (button: ToolbarButton) => (
    <button
      key={button.label}
      type="button"
      className="retro-toolbar__button projects-explorer__toolbar-button"
      disabled={button.disabled}
      aria-label={button.label}
      onClick={() => handleToolbarAction(button.label)}
    >
      <ToolbarIconElement icon={button.icon} />
      <span>{button.label}</span>
    </button>
  );

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
          {navigationButtons.map(renderToolbarButton)}

          <span
            className="retro-toolbar__separator"
            aria-hidden="true"
          />

          {fileButtons.map(renderToolbarButton)}

          <span
            className="retro-toolbar__separator"
            aria-hidden="true"
          />

          {actionButtons.map(renderToolbarButton)}

          <span
            className="retro-toolbar__separator"
            aria-hidden="true"
          />

          <button
            type="button"
            className="retro-toolbar__button projects-explorer__toolbar-button"
            aria-label="Change project view"
          >
            <ToolbarIconElement icon="views" />
            <span>Views</span>
          </button>

          <button
            type="button"
            className="projects-explorer__toolbar-dropdown"
            aria-label="Open view options"
          >
            <span aria-hidden="true" />
          </button>
        </div>

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

            <button
              type="button"
              className="projects-explorer__address-dropdown"
              aria-label="Open address history"
            >
              <span aria-hidden="true" />
            </button>
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
                <span
                  className="projects-explorer__folder-icon"
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
                <span
                  className="projects-explorer__folder-icon projects-explorer__folder-icon--large"
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
