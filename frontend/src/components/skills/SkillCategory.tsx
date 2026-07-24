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
  Strong: "Ready",
  "Working Knowledge": "Installed",
  Learning: "Updating",
};

function getSkillLevelClass(level: SkillLevel) {
  return level.toLowerCase().replaceAll(" ", "-");
}

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="skill-category__row">
      <div className="skill-category__component">
        <span
          className="skill-category__component-icon"
          aria-hidden="true"
        />

        <div className="skill-category__component-info">
          <strong>{skill.name}</strong>

          {skill.description && <p>{skill.description}</p>}
        </div>
      </div>

      <div className="skill-category__status">
        <span
          className={`skill-category__status-indicator skill-category__status-indicator--${getSkillLevelClass(
            skill.level
          )}`}
          aria-hidden="true"
        />

        <span>{levelLabels[skill.level]}</span>
      </div>
    </div>
  );
}

function SkillCategory({
  category,
  isActive,
  onSelect,
}: SkillCategoryProps) {
  return (
    <section
      className={
        isActive
          ? "skill-category skill-category--active"
          : "skill-category"
      }
      aria-label={`${category.title} skills`}
    >
      <button
        type="button"
        className="skill-category__category-button"
        onClick={() => onSelect(category.id)}
        aria-pressed={isActive}
      >
        <span>{category.title}</span>
      </button>

      <div className="skill-category__rows">
        {category.skills.map((skill) => (
          <SkillRow key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillCategory;