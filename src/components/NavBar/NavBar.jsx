import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { Folder, House, Menu, User, X } from "lucide-react";
import Socials from "../../ui/Socials/Socials";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        isOpen
          ? "navbar scrolled-mobile"
          : scrolled
            ? "navbar scrolled"
            : "navbar"
      }
    >
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
      <div className="nav-right-mobile">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? <Menu /> : <X />}
        </button>
      </div>
      <div className={isOpen ? "mobile-menu open" : "mobile-menu"}>
        <NavLink to={"/"} className="nav-link-mobile">
          <House />
          <span>Home</span>
        </NavLink>
        <NavLink to={"/about"} className="nav-link-mobile">
          <User />
          <span>About me</span>
        </NavLink>
        <NavLink to={"/projects"} className="nav-link-mobile">
          <Folder />
          <span>Projects</span>
        </NavLink>
        <div className="nav-link-mobile-footer">
          <Socials />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
