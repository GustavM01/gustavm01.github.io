import React from "react";
import reactIcon from "../../assets/icons/react.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";
import "./SkillCard.css";

function SkillCard({ skill }) {
  return (
    <>
      <div className="skill-container">
        <img className="skill-img" src={skill.icon} alt={skill.name} />
        <span className="skill-text">{skill.name}</span>
      </div>
    </>
  );
}

export default SkillCard;
