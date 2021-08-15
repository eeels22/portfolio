// Project files
import SkillSetCard from "../components/SkillSetCard";
import skillsData from "../data/skillsData.json";
import ActivityCard from "../components/ActivityCard";
import activityData from "../data/activityData.json";

// Interface
interface CardSectionProps {
  sectionHeading: string;
}
export default function CardSection({ sectionHeading }: CardSectionProps) {
  // Components
  let cardArray;
  if (sectionHeading === "Skills") {
    cardArray = skillsData.skillSets.map((element) => (
      <SkillSetCard key={element.id} data={element} />
    ));
  } else if (sectionHeading === "Work and education") {
    cardArray = activityData.activities.map((element) => (
      <ActivityCard key={element.id} data={element} />
    ));
  }

  return (
    <section className="CardSection">
      <h2>{sectionHeading}</h2>
      {cardArray}
    </section>
  );
}
