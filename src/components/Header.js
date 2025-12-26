import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo-container">
        <img src="/photos/logo1.png" className="logo-img" alt="Logo" />
        <span className="logo-text">FRAME & GLOW</span>
      </div>

      <nav className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>

        {/* ABOUT */}
        <div
          className={`dropdown ${aboutOpen ? "open" : ""}`}
          onClick={() => {
            setAboutOpen(!aboutOpen);
            setServiceOpen(false);
          }}
        >
          <span className="dropdown-title">About ▾</span>
          <div className="dropdown-menu">
            <Link to="/about">About Me</Link>
         <Link to="/about/question">Questions</Link>
            <Link to="/about/MyPhotographyStyle">My Photography Style</Link>
          </div>
        </div>

        {/* SERVICES */}
        <div
          className={`dropdown ${serviceOpen ? "open" : ""}`}
          onClick={() => {
            setServiceOpen(!serviceOpen);
            setAboutOpen(false);
          }}
        >
          <span className="dropdown-title">Services ▾</span>
          <div className="dropdown-menu">
            <Link to="/services/baby">Baby Shoot</Link>
            <Link to="/services/event">Event Shoot</Link>
            <Link to="/services/family">Family Photography</Link>
            <Link to="/services/maternity">Maternity</Link>
            <Link to="/services/wedding">Wedding</Link>
          </div>
        </div>

        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
