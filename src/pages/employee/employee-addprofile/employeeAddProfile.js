import React from "react";
import "./employeeAddProfile.css";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import AddProfile from "../../../components/add-profile/addProfile";

const EmployeeAddProfile = () => {
  return (
    <EmployeeLayout page="Update Company Profile">
      <AddProfile />
    </EmployeeLayout>
  );
};

export default EmployeeAddProfile;
