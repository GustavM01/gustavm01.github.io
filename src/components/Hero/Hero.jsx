import React from "react";
import "./Hero.css";
import HeroGraphic from "./HeroGraphic";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

function Hero() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p>Hi, I'm</p>
          <h1>
            Gustav <span>Mårtensson</span>
          </h1>
          <p className="hero-tag">Frontend Developer</p>

          <p className="hero-description">
            I build modern web applications using React, Firebase and Node.js.
          </p>
          <div className="hero-btns">
            <Button onClick={() => handleNavigate("/projects")}>
              View Projects
            </Button>
            <Button
              onClick={() => handleNavigate("/about")}
              variant="secondary"
            >
              About me
            </Button>
          </div>
          <p style={{ marginBlock: "40px 20px" }}>Find me</p>
          <div className="hero-link-icons">
            <a
              href="https://github.com/GustavM01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/gustav-m%C3%A5rtensson-b74589274/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="mailto:gustav.martensson01@gmail.com"
              aria-label="Email"
              title="Send me an email"
            >
              <Mail size={40} />
            </a>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}

export default Hero;
