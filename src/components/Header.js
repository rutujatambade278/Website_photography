import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo-container">
        <img src="/photos/logo1.png" className="logo-img" alt="Logo" />
        <span className="logo-text">FRAME & GLOW</span>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? "✖" : ""}
      </div>

      {/* NAV */}
      <nav className={`nav-center ${mobileOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link>

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

        <Link to="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
        <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
      </nav>

      {/* RIGHT SIDE CALL + WHATSAPP */}
     <div className="header-actions">
  <a href="tel:+918856886940" className="header-call">📞</a>

  <a
    href="https://wa.me/918882328838?text=Hi%20The%20Wedding%20Lens%20Co."
    target="_blank"
    rel="noreferrer"
    className="header-whatsapp"
  >
    💬
  </a>
</div>
    </header>
  );
};

export default Header;
