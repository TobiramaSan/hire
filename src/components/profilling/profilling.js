import React from "react";
import "./profilling.css";
import Rafiki from "../../assets/rafiki.png";

const Profilling = () => {
  return (
    <div className="profilling-container">
      <div className="profilling-img">
        <img src={Rafiki} alt="rafiki" />
      </div>
      <div className="profilling-text">
        <h2>Get Matched The Most Valuable Jobs, Just Drop Your CV at Staffing Solutions</h2>
        <p>In the subject line of email, write your name, the description of the position you want to apply</p>
        <button>Upload Your CV</button>
      </div>
    </div>
  );
};

export default Profilling;
