import React from "react";
import "./ProjectCard.css";
import Button from "../Button/Button";

function ProjectCard({ project, showFooter }) {
  return (
    <div className="project-card">
      <img className="project-img" src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-technologie-wrapper">
        {project.technologies.map((technologie, index) => (
          <span className="project-technologie" key={index}>
            {technologie}
          </span>
        ))}
      </div>
      {showFooter && (
        <div className="project-card-footer">
          <Button
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="secondary"
          >
            Live Demo
          </Button>
          <Button
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="secondary"
          >
            GitHub
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
