import React from "react";
import "./worksSingle.css";

const WorksSingle = ({ img, title, text }) => {
  return (
    <div className="works-single-container">
      <img src={img} alt="works" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default WorksSingle;
