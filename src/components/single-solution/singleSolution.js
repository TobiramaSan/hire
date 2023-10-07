import React from "react";
import "./singleSolution.css";
import { useNavigate } from "react-router-dom";

const SingleSolution = ({ name, img, number }) => {
  const navigate = useNavigate();
  return (
    <div
      className="single-solution-container"
      onClick={() => {
        navigate(`/job-type?category=${name}`);
      }}>
      <div>
        <img src={img} alt="single" />
        <div>
          <h2>{name}</h2>
          <p>{number} Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSolution;
