import React from "react";
import "./jobSingle.css";
import Location from "../../svg-components/location/location";

const JobSingle = ({ name, position, startSalary, endSalary, company, location, image }) => {
  return (
    <div className="job-single-container">
      <div className="job-single-conta">
        <div className="job-single-cont">
          <h2>{name}</h2>
          <div>
            <h3>{position}</h3>
            <p>
              Salary: ${startSalary} - ${endSalary}
            </p>
          </div>
        </div>
        <div className="job-single-wrapper">
          {/* <img src={image} alt="job" /> */}
          <div className="job-single-image">{image}</div>
          <div className="job-single-text">
            <h2>{company}</h2>
            <div>
              <Location />
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSingle;
