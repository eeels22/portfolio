// Interface
interface Skill {
  id: number;
  category: string;
  skills: string[];
}

interface SkillSetCardProps {
  data: Skill;
}

export default function SkillSetCard({ data }: SkillSetCardProps) {
  // Components
  const skillsList = data.skills.map((skill) => <li key={skill}>{skill}</li>);
  return (
    <div>
      <h3>{data.category}</h3>
      <ul>{skillsList}</ul>
    </div>
  );
}
