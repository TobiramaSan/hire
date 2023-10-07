import React from "react";
import "./employeeJob.css";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import ManageJobs from "../../../components/manage-jobs/manageJobs";

const EmployeeJob = () => {
  return (
    <EmployeeLayout page="Manage Jobs">
      <ManageJobs />
    </EmployeeLayout>
  );
};

export default EmployeeJob;
