import React from "react";
import "./jobType.css";
import Header from "../../components/header/header";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";
import JobTypes from "../../components/job-types/jobTypes";

const JobType = () => {
  return (
    <>
      <Header />
      <JobTypes />
      <Subscribe />
      <Footer />
    </>
  );
};

export default JobType;
