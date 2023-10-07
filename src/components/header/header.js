import React, { useState } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "../../assets/menu.svg";
import Logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(true);
  return (
    <>
      <div className="header-container">
        <div className="header-cont">
          <div className="header-wrapper">
            <div className="header-logo">
              <img src={Logo} alt="logo" />
              <img
                src={Menu}
                alt="menu"
                onClick={() => {
                  setClick(!click);
                }}
              />
            </div>
            {click ? (
              <div className="header-nav">
                <div className="header-nav-links">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/find-jobs">Find Jobs</NavLink>
                  <NavLink to="/works">How it Works</NavLink>
                  <NavLink to="/about">About us</NavLink>
                  <NavLink to="/contact">Contact Us</NavLink>
                </div>
                <div className="header-buttons">
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}>
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                    }}>
                    Register Now
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
