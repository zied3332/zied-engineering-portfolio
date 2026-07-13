import type {
  Skill,
  SkillCategoryType,
  SkillLevel,
} from "../../data/skills";

type SkillCategoryProps = {
  category: SkillCategoryType;
  isActive: boolean;
  onSelect: (categoryId: string) => void;
};

const levelLabels: Record<SkillLevel, string> = {
  Strong: "Strong",
  "Working Knowledge": "Used",
  Learning: "Learning",
};

function getSkillLevelClass(level: SkillLevel) {
  return level.toLowerCase().replaceAll(" ", "-");
}

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="skill-category__skill">
      <div className="skill-category__skill-info">
        <span className="skill-category__skill-name">
          {skill.name}
        </span>

        <span
          className={`skill-category__level skill-category__level--${getSkillLevelClass(
            skill.level
          )}`}
        >
          {levelLabels[skill.level]}
        </span>
      </div>

      {skill.description && (
        <p>{skill.description}</p>
      )}
    </div>
  );
}

function SkillCategory({
  category,
  isActive,
  onSelect,
}: SkillCategoryProps) {
  return (
    <article
      className={`skill-category ${
        isActive ? "skill-category--active" : ""
      }`}
    >
      <button
        type="button"
        className="skill-category__header"
        onClick={() => onSelect(category.id)}
        aria-expanded={isActive}
      >
        <span className="skill-category__icon" aria-hidden="true">
          {category.icon}
        </span>

        <span className="skill-category__header-text">
          <strong>{category.title}</strong>
          <small>{category.skills.length} installed items</small>
        </span>

        <span className="skill-category__arrow" aria-hidden="true">
          {isActive ? "▼" : "▶"}
        </span>
      </button>

      {isActive && (
        <div className="skill-category__content">
          <p className="skill-category__description">
            {category.description}
          </p>

          <div className="skill-category__skills">
            {category.skills.map((skill) => (
              <SkillRow key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default SkillCategory;