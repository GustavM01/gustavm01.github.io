import React, { useEffect } from "react";
import "./Projects.css";
import { projects } from "../data/projects";
import ProjectCard from "../ui/ProjectCard/ProjectCard";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Gustav Mårtensson";
  }, []);

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <p>Here are some of my personal projects I've worked on</p>
      <div className="projects-card-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} showFooter={true} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
