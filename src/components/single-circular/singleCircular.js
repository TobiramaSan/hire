import React from "react";
import "./singleCircular.css";

const SingleCircular = ({ img, company, type, position, time, description, amount }) => {
  return (
    <div className="single-circular-container">
      <div className="single-circular-user">
        <div className="single-circular-img">
          <img src={img} alt="circular" />
        </div>
        <div className="single-circular-head">
          <h2>{company}</h2>
          <p>{type}</p>
        </div>
      </div>
      <h3>{position}</h3>
      <h4>{time}</h4>
      <h5>{description}</h5>
      <div className="single-circular-apply">
        <p>{amount}</p>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default SingleCircular;
