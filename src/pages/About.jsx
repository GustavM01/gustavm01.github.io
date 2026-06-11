import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { aboutData } from "../data/about";
import {
  Brush,
  ChevronDown,
  Clock,
  Globe,
  Mail,
  MapPinnedIcon,
  Zap,
} from "lucide-react";

function About() {
  const [isVisable, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const threshold = window.innerWidth <= 875 ? 0.5 : 0.75;

  const progressRef = useRef();

  useEffect(() => {
    document.title = "About | Gustav Mårtensson";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.intersectionRatio >= threshold) {
          setIsVisible(true);
        }

        if (entry.intersectionRatio === 0) {
          setIsVisible(false);
        }
      },
      { threshold: [0, threshold] },
    );

    observer.observe(progressRef.current);

    return () => observer.disconnect();
  }, []);

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
                {aboutData.shortBio}
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
      <div className="my-journey-container">
        <h2>My Journey</h2>
        <div className="my-journey about-section">
          <p
            className={
              showMore ? "my-journey-text" : "my-journey-text collapsed"
            }
          >
            {aboutData.longBio}
          </p>
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="my-journey-btn"
          >
            Read More
            <ChevronDown className={showMore ? "flipped" : "not-flipped"} />
          </button>
        </div>
      </div>
      <div className="what-i-do-container">
        <h2>What I do</h2>
        <div className="about-section what-i-do">
          <div className="what-i-do-card">
            <div className="what-i-do-icon">
              <Globe size={26} />
            </div>
            <div className="what-i-do-text">
              <p>Web Applications</p>
              <p>
                Building responsive and interactive web applications with clean
                code and great user expperience.
              </p>
            </div>
          </div>

          <div className="what-i-do-card">
            <div className="what-i-do-icon">
              <Brush size={26} />
            </div>
            <div className="what-i-do-text">
              <p>UI & UX</p>
              <p>
                Creating modern, intuitive and visually appealing interfaces
                that are both functional and user-friendly.
              </p>
            </div>
          </div>

          <div className="what-i-do-card">
            <div className="what-i-do-icon">
              <Zap size={26} />
            </div>
            <div className="what-i-do-text">
              <p>Problem Solving</p>
              <p>
                Solving challenges and turning ideas into efficient and scalable
                solutions through code.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section skills">
        <h2>Skills & Technologies</h2>

        <div ref={progressRef} className="skill-info-grid">
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
                    style={{
                      width: isVisable ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
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
