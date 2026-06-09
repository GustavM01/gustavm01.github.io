import React from "react";
import Socials from "../../ui/Socials/Socials";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Socials size={30} />
        <div className="footer-text">
          <p>
            Built with <span>React</span> & <span>Vite</span>
          </p>
          <p>&copy; 2026 Gustav Mårtensson</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
