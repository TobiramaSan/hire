import React from "react";
import "./employeePackages.css";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import PricingPlan from "../../../components/pricing-plan/pricingPlan";

const EmployeePackages = () => {
  return (
    <EmployeeLayout page="Packages">
      <PricingPlan />
    </EmployeeLayout>
  );
};

export default EmployeePackages;
