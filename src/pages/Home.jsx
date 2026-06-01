import React from "react";
import Hero from "../components/Hero/Hero";
import SkillCard from "../ui/SkillCard/SkillCard";
import "./Home.css";
import reactIcon from "../assets/icons/react.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import cloudflareIcon from "../assets/icons/cloudflare.svg";
import csharpIcon from "../assets/icons/csharp.svg";
import css3Icon from "../assets/icons/css3.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import gitIcon from "../assets/icons/git.svg";
import html5Icon from "../assets/icons/html5.svg";

function Home() {
  const skills = [
    {
      name: "React",
      icon: reactIcon,
    },
    {
      name: "Javascript",
      icon: javascriptIcon,
    },
    // {
    //   name: "Cloudflare",
    //   icon: cloudflareIcon,
    // },
    {
      name: "C#",
      icon: csharpIcon,
    },
    {
      name: "CSS",
      icon: css3Icon,
    },
    {
      name: "Firebase",
      icon: firebaseIcon,
    },
    {
      name: "Git",
      icon: gitIcon,
    },
    {
      name: "HTML",
      icon: html5Icon,
    },
  ];

  return (
    <>
      <Hero />
      <div className="home-container">
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </section>
        <section className="featured-section"></section>
        <section className="what-i-do-section"></section>
      </div>
    </>
  );
}

export default Home;
