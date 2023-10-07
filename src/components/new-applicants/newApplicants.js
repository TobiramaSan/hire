import React from "react";
import "./newApplicants.css";
// import { applicants } from "../../utils/data/data";

const NewApplicants = () => {
  return (
    <div className="new-applicants-container">
      <h2>New Applicants</h2>
      <div className="new-applicants-body">
        {/* {applicants?.map((item, index) => {
          return (
            <div className="new-applicants-single" key={index}>
              <div>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
              </div>
              <h3>View</h3>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default NewApplicants;
