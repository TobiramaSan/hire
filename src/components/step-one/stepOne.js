import React from "react";
import "./stepOne.css";
import Step from "../../assets/step 1.png";
import Divider from "../../assets/divider.svg";
import Google from "../../assets/google 2.svg";
import Facebook from "../../assets/facebook.svg";

const StepOne = ({ action }) => {
  return (
    <div className="step-one-container">
      <div className="step-one-img">
        <img src={Step} alt="step" />
      </div>
      <div className="step-one-new">
        <h2>New Job Seeker</h2>
        <div className="step-one-form">
          <div className="new-job-form">
            <div>
              <label>Email address</label>
              <input type="email" />
            </div>
            <p>Email to access your login in your account</p>
          </div>
          <div className="new-job-form">
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <p>Create a password for your account</p>
          </div>
        </div>
        <div className="step-one-action">
          <button onClick={action}>REGISTER</button>
          <div className="step-one-divider">
            <img src={Divider} alt="divider" />
            <p>Or register in with</p>
            <img src={Divider} alt="divider" />
          </div>
          <div className="step-one-socials">
            <div>
              <img src={Facebook} alt="" />
              <h2>Facebook</h2>
            </div>
            <div>
              <img src={Google} alt="" />
              <h2>Google</h2>
            </div>
          </div>
        </div>
      </div>
      <p>Already a member? Login</p>
      <div className="green-line"></div>
      <div className="brown-line"></div>
      <div className="step-one-new">
        <h2>Employer</h2>
        <div className="step-one-form">
          <div className="new-job-form">
            <div>
              <label>Email address</label>
              <input type="email" />
            </div>
            <p>Email to access your login in your account</p>
          </div>
          <div className="new-job-form">
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
            <p>Create a password for your account</p>
          </div>
        </div>
        <div className="step-one-action">
          <button onClick={action}>REGISTER</button>
          <div className="step-one-divider">
            <img src={Divider} alt="divider" />
            <p>Or register in with</p>
            <img src={Divider} alt="divider" />
          </div>
          <div className="step-one-socials">
            <div>
              <img src={Facebook} alt="" />
              <h2>Facebook</h2>
            </div>
            <div>
              <img src={Google} alt="" />
              <h2>Google</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
