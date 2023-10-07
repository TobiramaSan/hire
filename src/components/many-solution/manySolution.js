import React from "react";
import "./manySolution.css";
import SingleSolution from "../single-solution/singleSolution";
import { jobCategories } from "../../utils/data/data";

const ManySolution = () => {
  return (
    <div className="many-solution-container">
      <h2>
        One Platform Many <span>Solutions</span>
      </h2>
      <div className="many-solution-wrapper">
        {jobCategories?.map((item, index) => {
          return <SingleSolution key={index} img={item.img} name={item.name} number={item.number} />;
        })}
      </div>
    </div>
  );
};

export default ManySolution;
