import React from "react";
import "./jobTypes.css";
import { jobs } from "../../utils/data/data";
import JobSingle from "../job-single/jobSingle";

const JobTypes = () => {
  return (
    <div className="job-types-container">
      {jobs?.map((item, index) => {
        return (
          <JobSingle
            name={item.name}
            key={index}
            company={item.companyName}
            image={item.companyImg}
            location={item.companyLocation}
            endSalary={item.salaryEnd}
            startSalary={item.salaryStart}
            position={item.position}
          />
        );
      })}
    </div>
  );
};

export default JobTypes;
