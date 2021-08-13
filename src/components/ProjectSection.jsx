// Project files
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData.json";

export default function ProjectSection() {
  // Components
  const projectCardArray = projectsData.projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <section>
      <h2>Projects</h2>
      <ol>{projectCardArray}</ol>
    </section>
  );
}
