import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="nav-left">
        <Link to={"/"}>
          <span>G.M</span>
        </Link>
        <p>Gustav Mårtensson</p>
      </div>
      <div className="nav-right">
        <NavLink to={"/"} className="nav-link">
          Home
        </NavLink>
        <NavLink to={"/about"} className="nav-link">
          About me
        </NavLink>
        <NavLink to={"/projects"} className="nav-link">
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
