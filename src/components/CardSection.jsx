// Project files
import SkillSetCard from "./SkillSetCard";
import skillsData from "../data/skillsData.json";
import ActivityCard from "./ActivityCard";
import activityData from "../data/activityData.json";

export default function CardSection({ sectionHeading }) {
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
    <section>
      <h2>{sectionHeading}</h2>
      {cardArray}
    </section>
  );
}
