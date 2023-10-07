import React from "react";
import "./dashboardSingle.css";

const DashboardSingle = ({ number, text, img }) => {
  return (
    <div className="dashboard-single-container">
      <img src={img} alt="dashboard" />
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  );
};

export default DashboardSingle;
