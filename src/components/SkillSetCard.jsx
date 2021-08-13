import React from "react";

export default function SkillSetCard({ data }) {
  // Components
  const skillsList = data.skills.map((skill) => <li key={skill}>{skill}</li>);
  return (
    <div>
      <h3>{data.category}</h3>
      <ol>{skillsList}</ol>
    </div>
  );
}
