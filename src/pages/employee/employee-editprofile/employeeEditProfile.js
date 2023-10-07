import React from "react";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import EditProfile from "../../../components/edit-profile/editProfile";

const EmployeeEditProfile = () => {
  return (
    <EmployeeLayout page="Edit Profile">
      <EditProfile />
    </EmployeeLayout>
  );
};

export default EmployeeEditProfile;
