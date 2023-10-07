import React from "react";
import "./moreJobs.css";
import { jobs } from "../../utils/data/data";

const MoreJobs = () => {
  return (
    <>
      <div className="more-jobs-container">
        <div>
          {jobs?.slice(0, 7)?.map((item, index) => {
            return (
              <div className="single-more-jobs" key={index}>
                <div className="blue-circle"></div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div>
          {jobs?.slice(7, 13)?.map((item, index) => {
            return (
              <div className="single-more-jobs" key={index}>
                <div className="blue-circle"></div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div>
          {jobs?.slice(13, 20)?.map((item, index) => {
            return (
              <div className="single-more-jobs" key={index}>
                <div className="blue-circle"></div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div>
          {jobs?.slice(20, 27)?.map((item, index) => {
            return (
              <div className="single-more-jobs" key={index}>
                <div className="blue-circle"></div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button className="find-more">Find More Jobs</button>
    </>
  );
};

export default MoreJobs;
