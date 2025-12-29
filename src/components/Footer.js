import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ---------- FOOTER ---------- */}
      <footer className="footer-main">
        <div className="footer-container">
          {/* LOGO + BRAND */}
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

          {/* LINKS */}
          <div className="footer-col">
            <h3>Useful Links</h3>
            <ul>
              <li>Product Shoot</li>
              <li>Wedding Shoot</li>
              <li>Cinematic Shoot</li>
              <li>Pre-Wedding Shoot</li>
              <li>All Type Photography</li>
              <li>All Type Video Shoot</li>
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

      <div className="footer-bottom">
        © 2025 <b>The Wedding Lens Co.</b> — All Rights Reserved
      </div>

      {/* 🔼 SCROLL TO TOP BUTTON */}
      {showTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
