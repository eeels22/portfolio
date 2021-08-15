// Project files
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData.json";

export default function ProjectSection() {
  // Components
  const projectCardArray = projectsData.projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <section className="ProjectSection">
      <h2>Projects</h2>
      <div className="projects-container">{projectCardArray}</div>
    </section>
  );
}
