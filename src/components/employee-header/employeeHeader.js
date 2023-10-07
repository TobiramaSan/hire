import React from "react";
import "./employeeHeader.css";
import Post from "../../assets/post-job.svg";
import NoImage from "../../assets/no-image.png";
import DropdownSvg from "../../svg-components/dropdownSvg/dropdownSvg";
import { useNavigate } from "react-router-dom";

const EmployeeHeader = ({ name, employee }) => {
  const navigate = useNavigate();
  return (
    <div className="employee-header-container">
      <div className="employee-header-wrapper">
        <div className="employee-header-post">
          <img src={Post} alt="Post" />
          <p
            onClick={() => {
              navigate("/employee-post-job");
            }}>
            Post a Job
          </p>
        </div>
        <div className="employee-header-buy">
          <p>Inbox</p>
          <div>
            <p>0</p>
          </div>
        </div>
        <div className="employee-header-profile">
          <img src={employee === null ? NoImage : employee === "" ? NoImage : employee} alt="employee" />
          <div>
            <h2>{name}</h2>
            <p>
              My Account
              <span>
                <DropdownSvg />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHeader;
