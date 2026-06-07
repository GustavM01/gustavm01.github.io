import React, { useState } from "react";
import "./ProjectCard.css";
import Button from "../Button/Button";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

function ProjectCard({ project, showFooter }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    if (selectedImage + 1 < project.images.length) {
      setSelectedImage((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage((prev) => prev - 1);
    }
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          className="project-img"
          src={project.images[selectedImage]}
          alt={project.title}
        />
        <div className="image-btn-container">
          <button
            disabled={selectedImage === 0}
            onClick={prevImage}
            className="image-btn"
          >
            {/* <ArrowLeft /> */}
            <ChevronLeft />
          </button>
          <div className="circle-container">
            {Array.from({ length: project.images.length }).map(
              (item, index) => (
                <div
                  onClick={() => setSelectedImage(index)}
                  key={index}
                  className={
                    index === selectedImage ? "circle filled" : "circle"
                  }
                />
              ),
            )}
          </div>
          <button
            disabled={selectedImage === project.images.length - 1}
            onClick={nextImage}
            className="image-btn"
          >
            {/* <ArrowRight /> */}
            <ChevronRight />
          </button>
        </div>
      </div>
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
            disabled={project.live.length === 0}
            title={
              project.live.length === 0
                ? "Live demo not available"
                : "Open live demo"
            }
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
