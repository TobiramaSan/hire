import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-link">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/privacy">Privacy Policy</NavLink>
        </div>
        <div className="footer-line"></div>
      </div>
    </div>
  );
};

export default Footer;
