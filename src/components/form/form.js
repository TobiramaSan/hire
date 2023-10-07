import React from "react";
import "./form.css";
import Loader from "../loader/loader";

const Form = ({
  emailChange,
  email,
  passwordChange,
  password,
  buttonText,
  type,
  buttonAction,
  confirmPasswordChange,
  confirmPassword,
  fullNameChange,
  fullName,
  loading,
  placeholder,
}) => {
  return (
    <div className="form-group-container">
      {type === "login" ? null : (
        <div className="form-groups">
          {/* <label>
            Full Name <span>*</span>
          </label> */}
          <input type="text" onChange={fullNameChange} value={fullName} placeholder={placeholder} />
        </div>
      )}
      <div className="form-groups">
        {/* <label>
          Email <span>*</span>
        </label> */}
        <input type="email" onChange={emailChange} value={email} placeholder="Email address" />
      </div>
      <div className="form-groups">
        {/* <label>
          Password <span>*</span>
        </label> */}
        <input type="password" onChange={passwordChange} value={password} placeholder="Password" />
      </div>
      {type === "login" ? null : (
        <div className="form-groups">
          {/* <label>
            Confirm Password <span>*</span>
          </label> */}
          <input type="password" onChange={confirmPasswordChange} value={confirmPassword} placeholder="Confirm Password" />
        </div>
      )}
      {type === "login" ? <p>Forgot Password</p> : null}
      {loading ? <Loader /> : <button onClick={buttonAction}>{buttonText}</button>}
    </div>
  );
};

export default Form;
