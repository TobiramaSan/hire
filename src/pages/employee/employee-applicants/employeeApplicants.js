import React from "react";
import "./employeeApplicants.css";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import ManageApplicants from "../../../components/manage-applicants/manageApplicants";

const EmployeeApplicants = () => {
  return (
    <EmployeeLayout page="Applicants">
      <ManageApplicants />
    </EmployeeLayout>
  );
};

export default EmployeeApplicants;
