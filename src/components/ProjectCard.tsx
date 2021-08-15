// Interface
interface Project {
  id: number;
  title: string;
  techStack: string[];
  imageFileName: string;
  repoLink: string;
  hostedLink: string;
  demoLink: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageObject = require(`../assets/images/projects/${project.imageFileName}`);
  const imageURL = imageObject.default;

  // List elements
  const techStackList = project.techStack.map((tech) => (
    <li key={tech}>{tech}</li>
  ));

  return (
    <div className="ProjectCard card">
      {imageURL && (
        <img
          src={imageURL}
          alt={`${project.title} project screenshot`}
          className="project-image"
        />
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <h4>Tech stack</h4>
      <ul>{techStackList}</ul>
      <a href={project.repoLink}>Source code</a>
      {project.hostedLink && <a href={project.hostedLink}>Live site</a>}
      {project.demoLink && <a href={project.demoLink}>Watch a demo</a>}
    </div>
  );
}
