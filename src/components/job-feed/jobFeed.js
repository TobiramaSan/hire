import React from "react";
import "./jobFeed.css";

const JobFeed = () => {
  const jobFeedData = [
    {
      header: "Job",
      img: "",
      jobType: "",
      jobTitle: "",
      space: "",
      company: "",
      location: "",
    },
  ];
  return (
    <div className="job-feed">
      <div className="job-feed-header">
        <h1>Recently Applied</h1>
        <span>View All</span>
      </div>
      <div className="job-feed-content">
        <table>
          <tr>
            <th> </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default JobFeed;
