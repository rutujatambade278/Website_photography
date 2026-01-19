import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ---------- FOOTER ---------- */}
      <footer className="footer-main">
        <div className="footer-container">

          {/* LOGO */}
          <div className="footer-col">
            <div className="footer-logo">
              The Wedding <span>Lens Co.</span>
            </div>

            <div className="footer-social">
              <a href="#">📸</a>
              <a href="#">📘</a>
              <a href="#">▶️</a>
              <a href="mailto:rushibhor214@gmail.com">✉️</a>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="footer-col">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/ProductShoot" onClick={scrollToTop}>
                  Product Shoot
                </Link>
              </li>

              <li>
                <Link to="/services/wedding" onClick={scrollToTop}>
                  Wedding Shoot
                </Link>
              </li>

              <li>
                <Link to="/Cinematic" onClick={scrollToTop}>
                  Cinematic Shoot
                </Link>
              </li>

              <li>
                <Link to="/services/Event" onClick={scrollToTop}>
                  Event Shoot
                </Link>
              </li>

              <li>
                <Link to="/Portfolio" onClick={scrollToTop}>
                  All Type Photography
                </Link>
              </li>

              <li>
                <Link to="/Alltypevideo" onClick={scrollToTop}>
                  All Type Videography
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col footer-contact">
            <h3>Contact Us</h3>
            <p>📞 +91 8856 886940</p>
            <p>💬 WhatsApp Us</p>
            <p>✉️ rushibhor214@gmail.com</p>
            <p>📍 Pune, Maharashtra</p>
          </div>

        </div>
      </footer>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        © 2025 <b>The Wedding Lens Co.</b> — All Rights Reserved
      </div>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
