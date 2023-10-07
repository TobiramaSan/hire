import React from "react";
import "./employeeSidebar.css";
import Logo from "../../assets/logo.png";
import { employeeSidebar } from "../../utils/data/data";
import { NavLink, useLocation } from "react-router-dom";

const EmployeeSidebar = ({ action, email }) => {
  const location = useLocation();

  return (
    <div className="employee-sidebar-container">
      <div className="employee-sidebar-header">
        <img src={Logo} alt="sidebare-logo" />
      </div>
      <div className="employee-sidebar-body">
        {employeeSidebar?.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.link}
              className={location.pathname === item.link ? "employee-sidebar-active" : "employee-sidebar-single"}
              onClick={item.text === "Logout" ? action : null}>
              <div>
                {item.icon}
                <p>{item.text}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeSidebar;
