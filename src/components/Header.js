import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setAboutOpen(false);
    setServiceOpen(false);
  };

  return (
    <header className="header">
      {/* LOGO */}
      <div className="logo-container">
        <img src="/photos/logo1.png" alt="Logo" className="logo-img" />
      </div>

      {/* NAV */}
      <nav className="nav-center">
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link>

        {/* ABOUT */}
        <div
          className="dropdown"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <span className="dropdown-title">About ▾</span>
          {aboutOpen && (
            <div className="glass-dropdown">
              <Link to="/about" onClick={handleLinkClick}>About Me</Link>
              <Link to="/about/question" onClick={handleLinkClick}>Questions</Link>
              <Link to="/about/MyPhotographyStyle" onClick={handleLinkClick}>
                My Photography Style
              </Link>
            </div>
          )}
        </div>

        {/* SERVICES */}
        <div
          className="dropdown"
          onMouseEnter={() => setServiceOpen(true)}
          onMouseLeave={() => setServiceOpen(false)}
        >
          <span className="dropdown-title">Services ▾</span>
          {serviceOpen && (
            <div className="glass-dropdown">
              <Link to="/services/baby" onClick={handleLinkClick}>Baby Shoot</Link>
              <Link to="/services/event" onClick={handleLinkClick}>Event Shoot</Link>
              <Link to="/services/family" onClick={handleLinkClick}>Family</Link>
              <Link to="/services/maternity" onClick={handleLinkClick}>Maternity</Link>
              <Link to="/services/wedding" onClick={handleLinkClick}>Wedding</Link>
            </div>
          )}
        </div>

        <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>

        {/* SOCIAL – Contact च्या शेजारी */}
        <div className="social-bar-inline">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">📷</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">▶️</a>
        </div>
      </nav>

      {/* FLOATING ICONS */}
      <div className="header-actions">
        <a href="tel:+918856886940" className="header-call">📞</a>
        <a
          href="https://wa.me/918882328838"
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
