import type {
  Experience,
  ExperienceStatus,
} from "../../data/experience";

import folderCodeIcon from "../../assets/icons/folder-code.png";
import folderToolsIcon from "../../assets/icons/folder-tools.png";
import folderDatabaseIcon from "../../assets/icons/folder-database.png";
import folderLinuxIcon from "../../assets/icons/folder-linux.png";
import profileUserIcon from "../../assets/icons/profile-user.png";

type ExperienceCardProps = {
  experience: Experience;
  entryNumber: number;
  isSelected: boolean;
  onSelect: (experienceId: number) => void;
};

function getStatusClassName(
  status: ExperienceStatus
): string {
  return `experience-card__status-indicator experience-card__status-indicator--${status.toLowerCase()}`;
}

function getExperienceIcon(experience: Experience): string {
  const searchableText = [
    experience.title,
    experience.organization,
    experience.type,
  ]
    .join(" ")
    .toLowerCase();

  if (
    searchableText.includes("full-stack") ||
    searchableText.includes("developer") ||
    searchableText.includes("internship")
  ) {
    return folderCodeIcon;
  }

  if (
    searchableText.includes("automation") ||
    searchableText.includes("freelance")
  ) {
    return folderToolsIcon;
  }

  if (
    searchableText.includes("business") ||
    searchableText.includes("data")
  ) {
    return folderDatabaseIcon;
  }

  if (
    searchableText.includes("system") ||
    searchableText.includes("engineering")
  ) {
    return folderLinuxIcon;
  }

  return profileUserIcon;
}

function ExperienceCard({
  experience,
  entryNumber,
  isSelected,
  onSelect,
}: ExperienceCardProps) {
  return (
    <button
      type="button"
      className={
        isSelected
          ? "experience-card experience-card--selected"
          : "experience-card"
      }
      onClick={() => onSelect(experience.id)}
      aria-pressed={isSelected}
      aria-label={`Open ${experience.title} at ${experience.organization}`}
    >
      <span
        className="experience-card__timeline"
        aria-hidden="true"
      >
        <span className="experience-card__timeline-line" />

        <span
          className={getStatusClassName(experience.status)}
        />
      </span>

      <span className="experience-card__role-icon" aria-hidden="true">
        <img
          src={getExperienceIcon(experience)}
          alt=""
        />
      </span>

      <span className="experience-card__main">
        <span className="experience-card__top-row">
          <span className="experience-card__entry-number">
            Entry {String(entryNumber).padStart(2, "0")}
          </span>

          <span className="experience-card__period">
            {experience.period}
          </span>
        </span>

        <strong className="experience-card__title">
          {experience.title}
        </strong>

        <span className="experience-card__organization">
          {experience.organization}
        </span>

        <span className="experience-card__file-name">
          {experience.fileName}
        </span>
      </span>

      <span className="experience-card__state">
        {experience.status}
      </span>
    </button>
  );
}

export default ExperienceCard;