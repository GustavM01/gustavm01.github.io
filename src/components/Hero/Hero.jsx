import React from "react";
import "./Hero.css";
import HeroGraphic from "./HeroGraphic";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";

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
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}

export default Hero;
