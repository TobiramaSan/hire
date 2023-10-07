import React from "react";
import "./verifyMail.css";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const VerifyMail = () => {
  const navigate = useNavigate();
  return (
    <div className="verify-mail-container">
      <div className="verify-mail-head">
        <img src={Logo} alt="verify-logo" />
      </div>
      <div className="verify-mail-body">
        <h2>Email Verification Success</h2>
        <p> An Email has been sent to your email account,Please check your inbox and verify your email.</p>
        <button
          onClick={() => {
            navigate("/login");
          }}>
          Proceed to Log in
        </button>
      </div>
    </div>
  );
};

export default VerifyMail;
