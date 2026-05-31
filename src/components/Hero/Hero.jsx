import React from "react";
import "./Hero.css";
import HeroGraphic from "./HeroGraphic";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-tag">Frontend Developer</p>

          <h1>
            Hi, I'm <span>Gustav</span>
          </h1>

          <p>
            I build modern web applications using React, Firebase and Node.js.
          </p>
          <button>View Projects</button>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}

export default Hero;
