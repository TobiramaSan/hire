import React from "react";
import RegisterLayout from "../../utils/register-layout/registerLayout";
import LoginForm from "../../components/login-form/loginForm";

const Login = () => {
  return (
    <>
      <RegisterLayout type="login">
        <LoginForm />
      </RegisterLayout>
    </>
  );
};

export default Login;
