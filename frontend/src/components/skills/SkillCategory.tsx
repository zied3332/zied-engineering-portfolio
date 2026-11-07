import type { SkillCategoryType } from "../../data/skills";

type SkillCategoryProps = {
  category: SkillCategoryType;
};

function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <ul className="skill-category" aria-label={category.title + " skills"}>
      {category.skills.map((skill) => (
        <li className="skill-category__row" key={skill.name}>
          <div>
            <strong>{skill.name}</strong>
            {skill.description && <p>{skill.description}</p>}
          </div>
          <span className="skill-category__status">{skill.level}</span>
        </li>
      ))}
    </ul>
  );
}

export default SkillCategory;
