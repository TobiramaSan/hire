import React from "react";
import "./employeePayment.css";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import Payment from "../../../components/payment/payment";

const EmployeePayments = () => {
  return (
    <EmployeeLayout page="Payment">
      <Payment />
    </EmployeeLayout>
  );
};

export default EmployeePayments;
