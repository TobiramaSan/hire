import React from "react";
import "./candidateDashboard.css";
import Header from "../header/header";
import Layout from "../../utils/layout/layout";

const CandidateDashboard = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className="candidate-container"></div>
      </Layout>
    </>
  );
};
export default CandidateDashboard;
