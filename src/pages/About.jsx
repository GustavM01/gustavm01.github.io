import React from "react";
import "./About.css";
import { Clock, Mail, MapPinnedIcon } from "lucide-react";

function About() {
  const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 70 },
    { name: "Git", level: 65 },
    { name: "Firebase", level: 55 },
  ];

  return (
    <div className="about-me-container">
      <div className="about-section about-me">
        <h2>About me</h2>
        <div className="about-me-info">
          <div className="about-me-info-left">
            <div>
              <p
                style={{
                  marginBottom: "1rem",
                  color: "var(--clr-text-secondary)",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores iure adipisci qui facilis. Blanditiis modi corporis
                aperiam similique nobis dolorem praesentium! Rem odit vero eum
                asperiores possimus, aut eligendi voluptatem?
              </p>
              <p style={{ color: "var(--clr-text-muted)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                sit ex maxime laboriosam pariatur ut omnis ea officia vero. Aut
                molestias sed ex nihil ipsum.
              </p>
            </div>
            <div className="about-me-info-box">
              <div className="about-me-info-section">
                <MapPinnedIcon size={28} />
                <div>
                  <p>Location</p>
                  <p>Sweden</p>
                </div>
              </div>
              <div className="about-me-info-section">
                <Mail size={28} />
                <div>
                  <p>Email</p>
                  <p>gustav.martensson01@gmail.com</p>
                </div>
              </div>
              <div className="about-me-info-section">
                <Clock size={28} />
                <div>
                  <p>Availability</p>
                  <p>Open for opportunities</p>
                </div>
              </div>
            </div>
          </div>
          <img src="https://placehold.co/400x600" alt="Profile picture" />
        </div>
      </div>
      <div className="about-section skills">
        <h2 style={{ marginTop: "2rem" }}>Skills & Technologies</h2>

        <div className="skill-info-grid">
          {skills.map((skill, index) => (
            <div key={index} className="about-skills-info">
              <div className="skill-info-box">
                <div className="skill-info-text">
                  <p style={{ color: "var(--clr-text-secondary)" }}>
                    {skill.name}
                  </p>
                  <p style={{ color: "var(--clr-text-muted)" }}>
                    {skill.level} %
                  </p>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
