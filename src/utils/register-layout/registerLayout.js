import React from "react";
import "./registerLayout.css";
import Logo from "../../assets/logo.png";
import Image from "../../assets/register-img.png";
import { NavLink } from "react-router-dom";

const RegisterLayout = ({ children, type }) => {
  return (
    <div className="register-layout-container">
      <div className="register-layout-text">
        <div className="register-layout-logo">
          <img src={Logo} alt="home-logo" />
        </div>
        <div className="register-layout-wrapper">
          <div className="register-layout-head">
            <h2>{type === "login" ? "Log In" : "Create  account"}</h2>
            <p>
              {type === "login" ? "Don't have an account? " : "Already have account? "}
              <span>{type === "login" ? <NavLink to="/register">Create Account</NavLink> : <NavLink to="/login">Log in</NavLink>} </span>
            </p>
          </div>
          {children}
        </div>
      </div>
      <div className="register-layout-img">
        <img src={Image} alt="register" />
      </div>
    </div>
  );
};

export default RegisterLayout;
