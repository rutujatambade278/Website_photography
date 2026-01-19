import React from "react";
import "./SocialBar.css";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className="social-wrapper">
      {/* TITLE */}
      <div className="social-title">Follow Us</div>

      {/* ICON BAR */}
      <div className="social-bar">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="youtube"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.instagram.com/the_wedding_lens_co.1"
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="twitter"
        >
          <FaTwitter />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
