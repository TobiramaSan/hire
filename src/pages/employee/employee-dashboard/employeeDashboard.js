import React from "react";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import EmployeeDashboards from "../../../components/employee-dashboards/employeeDashboards";

const EmployeeDashboard = () => {
  return (
    <EmployeeLayout page="Dashboard">
      <EmployeeDashboards />
    </EmployeeLayout>
  );
};

export default EmployeeDashboard;
