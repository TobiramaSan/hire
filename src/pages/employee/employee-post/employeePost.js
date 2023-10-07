import React from "react";
import "./employeePost.css";
import EmployeeLayout from "../../../utils/employee-layout/employeeLayout";
import PostJob from "../../../components/post-job/postJob";

const EmployeePost = () => {
  return (
    <EmployeeLayout page="Post Job">
      <PostJob />
    </EmployeeLayout>
  );
};

export default EmployeePost;
