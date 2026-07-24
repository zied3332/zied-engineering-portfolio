import type {
  KeyboardEvent,
  MouseEvent,
} from "react";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  isSelected: boolean;
  onSelect: (projectId: number) => void;
};

function ProjectCard({
  project,
  isSelected,
  onSelect,
}: ProjectCardProps) {
  const statusClass = project.status
    .toLowerCase()
    .replace(/\s+/g, "-");

  const handleKeyDown = (
    event: KeyboardEvent<HTMLElement>
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      onSelect(project.id);
    }
  };

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.stopPropagation();
  };

  return (
    <article
      className={
        isSelected
          ? "project-card project-card--selected"
          : "project-card"
      }
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Select ${project.title}`}
      onClick={() => onSelect(project.id)}
      onKeyDown={handleKeyDown}
    >
      <div className="project-card__top">
        <div
          className="project-card__folder"
          aria-hidden="true"
        >
          <span className="project-card__folder-front" />
          <span className="project-card__folder-paper" />
        </div>

        <div className="project-card__file-info">
          <span className="project-card__filename">
            {project.fileName}
          </span>

          <span className="project-card__file-type">
            Project Folder
          </span>
        </div>
      </div>

      <div className="project-card__preview">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />

        <span
          className={`project-card__status project-card__status--${statusClass}`}
        >
          {project.status}
        </span>
      </div>

      <div className="project-card__content">
        <h3>{project.title}</h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <dl className="project-card__details">
          <div>
            <dt>Type:</dt>
            <dd>{project.category}</dd>
          </div>

          <div>
            <dt>Modified:</dt>
            <dd>{project.year}</dd>
          </div>

          <div>
            <dt>Technologies:</dt>

            <dd>
              {project.technologies.join(", ")}
            </dd>
          </div>
        </dl>

        <div className="project-card__actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="retro-button project-card__button"
              onClick={handleLinkClick}
            >
              View Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="retro-button project-card__button"
              onClick={handleLinkClick}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;