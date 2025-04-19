// src/components/Footer.jsx
import React from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>© 2025 – Rain Construction</p>
          <a href="tel:+302107792345" className="footer-phone">
            <FaPhoneAlt style={{ marginRight: '8px' }} />
            +30 210 779 23 45
          </a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/rainconstructiongr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/rainconstruction?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
