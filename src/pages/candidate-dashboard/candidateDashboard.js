import React from "react";
import "./candidateDashboard.css";
import Header from "../../components/header/header";
// import Layout from "../../utils/layout/layout";
import NavBar from "../../components/navbar/navBar";
import Footer from "../../components/footer/footer";
import DashboardDashboard from "../../components/dashboard-dashboard/dashboardDashboard";

const CandidateDashboard = () => {
  return (
    <>
      <Header />
      <div className="candidate-container">
        <div className="navigation">
          <NavBar />
        </div>
        <div className="content">
          <DashboardDashboard />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CandidateDashboard;
