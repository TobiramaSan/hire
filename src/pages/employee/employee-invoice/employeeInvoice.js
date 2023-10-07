import React from "react";
import "./employeeInvoice.css";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import Invoice from "../../../components/invoice/invoice";

const EmployeeInvoice = () => {
  return (
    <EmployeeLayout page="Invoice">
      <Invoice />
    </EmployeeLayout>
  );
};

export default EmployeeInvoice;
