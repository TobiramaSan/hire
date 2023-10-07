import React from "react";
import "./employeeThree.css";
import SquareRectangle from "../../svg-components/square-rectangle/squareRectangle";
import Contact from "../../assets/contact.png";
import Arrow from "../../assets/arrow.png";
import Print from "../../assets/print.png";

const EmployeeThree = () => {
  return (
    <div className="employer-personal-details">
      <div className="vector-parent">
        <img className="group-child" alt="Arrow" src={Arrow} />
        <div className="step-2-job-container">
          <p className="step-2">Step 2</p>
          <p className="job-requirement">Job Requirement</p>
        </div>
        <div className="group-item" />
        <div className="register-employer">
          <p className="job-requirement">Register</p>
          <p className="job-requirement">Employer</p>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="group-inner" />
        <div className="rectangle-div" />
        <div className="menu">Menu</div>
        <div className="rectangle-group">
          <div className="group-child1" />
          <div className="group-child2" />
          <div className="group-child3" />
        </div>
      </div>
      <div className="button-parent">
        <div className="button">
          <div className="click-here">BACK</div>
        </div>
        <div className="button1">
          <div className="click-here">NEXT</div>
        </div>
      </div>
      <div className="rectangle-container">
        <div className="group-child4" />
        <div className="group-child5" />
        <div className="group-child6" />
        <div className="group-child7" />
        <div className="group-child8" />
        <div className="group-child9" />
        <div className="group-div">
          <div className="group-child10" />
          <b className="visa-card">Visa Card</b>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child11" />
          <b className="mastercard-card">MasterCard Card</b>
        </div>
        <div className="rectangle-parent2">
          <div className="group-child12" />
          <b className="visa-electron-catd">Visa Electron catd</b>
        </div>
        <div className="rectangle-parent3">
          <div className="group-child13" />
          <b className="maestro-card">Maestro Card</b>
        </div>
        <div className="rectangle-parent4">
          <div className="group-child13" />
          <b className="maestro-card">SBM Smile</b>
        </div>
        <div className="rectangle-parent5">
          <div className="group-child15" />
          <b className="others">Others</b>
        </div>
        <div className="rectangle-parent6">
          <div className="group-child16" />
          <b className="card-number">Card Number</b>
        </div>
        <div className="rectangle-parent7">
          <div className="group-child16" />
          <b className="card-number">Name on the Card</b>
        </div>
        <div className="rectangle-parent8">
          <div className="group-child16" />
          <b className="card-number">Billing Address</b>
        </div>
        <div className="rectangle-parent9">
          <div className="group-child16" />
          <b className="card-number">Expiry Date</b>
        </div>
        <div className="rectangle-parent10">
          <div className="group-child16" />
          <b className="card-number">Bank Name</b>
        </div>
        <div className="rectangle-parent11">
          <div className="group-child21" />
          <b className="card-security-code-container">
            <p className="job-requirement">Card Security</p>
            <p className="job-requirement">Code</p>
          </b>
        </div>
      </div>
      <div className="group-parent">
        <div className="rectangle-parent12">
          <div className="group-child22" />
          <b className="enter-card-details">Enter Card Details</b>
        </div>
        <div className="rectangle-parent13">
          <div className="group-child22" />
          <b className="enter-card-details">Payment Type</b>
        </div>
        <div className="group-child24" />
        <div className="group-child25" />
        <div className="group-child26" />
        <div className="group-child27" />
        <div className="group-child28" />
      </div>
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <b className="or">OR</b>
        <div className="vector-group">
          <SquareRectangle />
          <b className="pay-online">Pay Online</b>
        </div>
        <div className="vector-container">
          <SquareRectangle />
          <b className="pay-offline">Pay Offline</b>
        </div>
      </div>
      <img className="main-page2-edited-2023-page-001" alt="print" src={Print} />
      <img className="main-page2-edited-2023-page-00" alt="contact" src={Contact} />
      <div className="employer-personal-details-child" />
      <div className="monthyear">month/year</div>
    </div>
  );
};

export default EmployeeThree;
