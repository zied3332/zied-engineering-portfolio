import type {
  Experience,
  ExperienceStatus,
} from "../../data/experience";

type ExperienceCardProps = {
  experience: Experience;
  isSelected: boolean;
  onSelect: (experienceId: number) => void;
};

function getStatusClassName(status: ExperienceStatus): string {
  return `experience-card__status experience-card__status--${status.toLowerCase()}`;
}

function ExperienceCard({
  experience,
  isSelected,
  onSelect,
}: ExperienceCardProps) {
  const handleSelect = () => {
    onSelect(experience.id);
  };

  return (
    <button
      type="button"
      className={`experience-card ${
        isSelected ? "experience-card--selected" : ""
      }`}
      onClick={handleSelect}
      aria-pressed={isSelected}
      aria-label={`Open experience file ${experience.fileName}`}
    >
      <span className="experience-card__icon" aria-hidden="true">
        <span className="experience-card__icon-fold" />
        <span className="experience-card__icon-line" />
        <span className="experience-card__icon-line" />
        <span className="experience-card__icon-line" />
      </span>

      <span className="experience-card__content">
        <span className="experience-card__file-name">
          {experience.fileName}
        </span>

        <span className="experience-card__role">
          {experience.title}
        </span>

        <span className="experience-card__metadata">
          <span>{experience.period}</span>

          <span className={getStatusClassName(experience.status)}>
            {experience.status}
          </span>
        </span>
      </span>
    </button>
  );
}

export default ExperienceCard;