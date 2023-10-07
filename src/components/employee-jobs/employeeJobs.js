import React from "react";
import "./employeeJobs.css";
import Noimage from "../../assets/no-image-square.png";

const EmployeeJobs = ({ title, company, jobType, location, description }) => {
  return (
    <div className="employee-jobs-container">
      <div className="employee-jobs-head">
        <div className="employee-jobs-text">
          <img src={Noimage} alt="noImage" />
          <div>
            <h2>{title}</h2>
            <p>{company}</p>
            <h3>
              <span>{jobType} </span> - {location}
            </h3>
          </div>
        </div>
        <button>View Detail</button>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default EmployeeJobs;
