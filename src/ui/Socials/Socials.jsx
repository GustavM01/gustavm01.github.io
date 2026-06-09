import React from "react";
import "./Socials.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

function Socials({ size = 40 }) {
  return (
    <div className="hero-link-icons">
      <a
        href="https://github.com/GustavM01"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/gustav-m%C3%A5rtensson-b74589274/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={size} />
      </a>
      <a
        href="mailto:gustav.martensson01@gmail.com"
        aria-label="Email"
        title="Send me an email"
      >
        <Mail size={size} />
      </a>
    </div>
  );
}

export default Socials;
