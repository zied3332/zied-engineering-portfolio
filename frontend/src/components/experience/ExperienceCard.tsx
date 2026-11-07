import type { Experience } from "../../data/experience";

type ExperienceCardProps = {
  experience: Experience;
  entryNumber: number;
  isSelected: boolean;
  onSelect: (experienceId: number) => void;
};

function ExperienceCard({ experience, entryNumber, isSelected, onSelect }: ExperienceCardProps) {
  return (
    <button type="button" className="experience-card" onClick={() => onSelect(experience.id)}
      aria-pressed={isSelected} aria-label={"Open " + experience.title + " at " + experience.organization}>
      <span className="experience-card__period">Entry {String(entryNumber).padStart(2, "0")} · {experience.period}</span>
      <strong>{experience.title}</strong>
      <span>{experience.organization}</span>
      <span className="experience-card__period">{experience.fileName}</span>
      <span>{experience.status}</span>
    </button>
  );
}

export default ExperienceCard;
