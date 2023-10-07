import React from "react";
import "./employeeProfile.css";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import EmployeeAbout from "../../../components/employee-about/employeeAbout";

const EmployeeProfile = () => {
  return (
    <EmployeeLayout page="Profile">
      <EmployeeAbout />
    </EmployeeLayout>
  );
};

export default EmployeeProfile;
