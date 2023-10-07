import React from "react";
import "./employeeOne.css";
import Step from "../../assets/employer1.png";
import UserMulti from "../../utils/user-multi/userMulti";

const EmployeeOne = () => {
  return (
    <UserMulti page="Company Details" img={Step}>
      <div className="personal-details-cont">
        <div className="personal-details-form">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Surname</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Company name</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Sector</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Status</label>
          <div className="personal-details-status">
            <div>
              <label>Local</label>
              <input type="text" />
            </div>
            <div>
              <label>Offshore</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="personal-details-form full">
          <label>Address</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Phone</label>
          <div className="personal-details-phone">
            <div>
              <label>Home</label>
              <input type="text" />
            </div>
            <div>
              <label>Mobile</label>
              <input type="text" />
            </div>
            <div>
              <label>Office</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="personal-details-form">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>BRN Number </label>
          <input type="text" />
        </div>
        <div className="personal-details-form">
          <label>Company Sizeh</label>
          <input type="text" />
        </div>
      </div>
      <div className="mandatory-fields">
        <p>Mandatory fields to be able to register as employer</p>
      </div>
    </UserMulti>
  );
};

export default EmployeeOne;
