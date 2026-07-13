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
  return (
    <article
      className={`project-card ${
        isSelected ? "project-card--selected" : ""
      }`}
      onClick={() => onSelect(project.id)}
    >
      <div className="project-card__preview">
        <img src={project.image} alt={project.title} />

        <span
          className={`project-card__status project-card__status--${project.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {project.status}
        </span>
      </div>

      <div className="project-card__content">
        <div className="project-card__file">
          <span className="project-card__folder-icon" aria-hidden="true">
            📁
          </span>

          <div>
            <span className="project-card__filename">
              {project.fileName}
            </span>

            <span className="project-card__type">
              Project Folder
            </span>
          </div>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card__metadata">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <div className="project-card__actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="retro-button project-card__button"
              onClick={(event) => event.stopPropagation()}
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
              onClick={(event) => event.stopPropagation()}
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