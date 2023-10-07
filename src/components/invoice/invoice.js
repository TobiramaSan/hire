import React, { useState } from "react";
import "./invoice.css";

const Invoice = () => {
  const [state, setState] = useState("All");
  return (
    <div className="invoice-container">
      <h2>Payment History</h2>
      <div className="invoice-header-container">
        <h2
          onClick={() => {
            setState("All");
          }}
          className={state === "All" ? "invoice-header-active" : ""}>
          All
        </h2>
        <h2
          onClick={() => {
            setState("Complete");
          }}
          className={state === "Complete" ? "invoice-header-active" : ""}>
          Complete
        </h2>
        <h2
          onClick={() => {
            setState("Pending");
          }}
          className={state === "Pending" ? "invoice-header-active" : ""}>
          Pending
        </h2>
        <h2
          onClick={() => {
            setState("Rejected");
          }}
          className={state === "Rejected" ? "invoice-header-active" : ""}>
          Rejected
        </h2>
      </div>
      <div className="invoice-body-container">
        <div className="invoice-body-head">
          <p>Order ID</p>
          <p>Date</p>
          <p>Amount</p>
          <p>Total Jobs</p>
          <p>Status</p>
        </div>
        <div className="invoice-body-single">
          <p>#15267</p>
          <p>Mar 1, 2023</p>
          <p>100</p>
          <p>1</p>
          <p>Success</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
