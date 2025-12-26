import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-container">

          {/* LOGO + BRAND */}
          <div className="footer-col">
            <div className="footer-logo">
              The Wedding <span>Lens Co.</span>
            </div>

            <div className="footer-social">
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="YouTube">▶️</a>
              <a
                href="mailto:rushibhor214@gmail.com"
                aria-label="Gmail"
                title="Email Us"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="footer-col">
            <h3>Useful Links</h3>
            <ul>
              <li onClick={() => window.location.href="/product-shoot"}>Product Shoot</li>
              <li onClick={() => window.location.href="/engagement"}>Wedding Shoot</li>
              <li onClick={() => window.location.href="/event"}>Cinematic Shoot</li>
              <li onClick={() => window.location.href="/family"}>Pre-Wedding Shoot</li>
              <li onClick={() => window.location.href="/wedding"}>All Type Photography</li>
              <li onClick={() => window.location.href="/video"}>All Type Video Shoot</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col footer-contact">
            <h3>Contact Us</h3>

            <p onClick={() => window.open("tel:+918856886940")}>
              📞 +91 8856 886940
            </p>

            <p onClick={() => window.open("tel:+917771005455")}>
              📞 +91 77710 05455
            </p>

            <p
              onClick={() =>
                window.open(
                  "https://wa.me/918882328838?text=Hi%20The%20Wedding%20Lens%20Co.%20I%20want%20to%20enquire%20about%20photoshoot",
                  "_blank"
                )
              }
            >
              💬 WhatsApp Us
            </p>

            <p
              onClick={() =>
                window.open("mailto:rushibhor214@gmail.com")
              }
            >
              ✉️ rushibhor214@gmail.com
            </p>

            <p>📍 Pune, Maharashtra</p>
          </div>

        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2025 <b>The Wedding Lens Co.</b> — All Rights Reserved
      </div>

      {/* FLOATING BUTTONS */}
      <a href="tel:+918856886940" className="floating-call">📞</a>

      <a
        href="https://wa.me/918882328838?text=Hi%20The%20Wedding%20Lens%20Co."
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        💬
      </a>
    </>
  );
};

export default Footer;
