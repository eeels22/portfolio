// Project files
import SkillSetCard from "./SkillSetCard";
import skillsData from "../data/skillsData.json";

export default function CardSection({ sectionHeading }) {
  // Components
  const cardArray = skillsData.skillSets.map((element) => (
    <SkillSetCard key={element.id} data={element} />
  ));

  return (
    <section>
      <h2>{sectionHeading}</h2>
      {cardArray}
    </section>
  );
}
