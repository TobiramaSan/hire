import React from "react";
import "./stepFive.css";
// import UserMulti from "../../utils/user-multi/userMulti";
import Plus from "../../assets/plus.png";
import EmploymentHistory from "../../svg-components/employmentHistory";
import Qualification from "../../svg-components/qualification";
import Legal from "../../svg-components/legal";
import Personal from "../../svg-components/personal";

const StepFive = ({ add, minus }) => {
  return (
    <div className="stepfive" fullStep={false} add={add} minus={minus}>
      <div className="personal-details-header">
        <div className="personal-details-single active">
          <Personal color="#0A65CC" />
          <h2>Personal Information</h2>
        </div>
        <div className="personal-details-single">
          <EmploymentHistory color="black" />
          <h2>Employment History</h2>
        </div>
        <div className="personal-details-single">
          <Qualification color="black" />
          <h2>Qualification</h2>
        </div>
        <div className="personal-details-single">
          <Legal color="black" />
          <h2>Legal</h2>
        </div>
      </div>
      <div className="stepfive-container">
        <div className="secondary-reference">
          <h1>OTHER SECONDARY REFERENCES</h1>
          <div className="pass-fail">
            <div className="pass">
              <label>Pass</label>
              <input type="checkbox" />
            </div>
            <div className="fail">
              <label>fail</label>
              <input type="checkbox" />
            </div>
          </div>
          <div className=" certificate-country">
            <div className="cert">
              <div className=" cert-name">
                <label>Certificate</label>
                <input type="text" placeholder="local" />
              </div>
              <div className="cert-name">
                <label>Country</label>
                <input type="text" placeholder="New York" />
              </div>
            </div>
            <div className=" cert">
              <div className=" cert-name">
                <label>Examining Body</label>
                <input type="text" placeholder="" />
              </div>
              <div className=" cert-name">
                <label> Year (mm/yy)</label>
                <input type="text" placeholder="to" />
              </div>
            </div>
          </div>
          <button className="add-certificate">
            <img src={Plus} alt="" /> Add another certificate
          </button>
        </div>
        <div className="technical">
          <h1>TECHNICAL VOCATIONAL EDUCATION</h1>
          <div className=" certificate-country">
            <div className="cert">
              <div className="cert-name">
                <label>University/Awarding Body</label>
                <input type="text" placeholder="local" />
              </div>
              <div className="cert-name">
                <label>Qualification obtained</label>
                <input type="text" placeholder="New York" />
              </div>
              <div className="cert-name">
                <label>Duration</label>
                <input type="text" placeholder="New York" />
              </div>
            </div>
            <div className="cert">
              <div className="cert-name">
                <label>Qualification Obtained</label>
                <input type="text" placeholder="" />
              </div>
              <div className="cert-name">
                <label> Class/level/division</label>
                <input type="text" placeholder="Washington" />
              </div>
              <div className="cert-name">
                <label>District</label>
                <input type="text" placeholder="New York" />
              </div>
            </div>
          </div>
        </div>
        <div className="outside-btns">
          <button type="" className="add-new-user-btn">
            <img src={Plus} alt="" /> ADD NEW USER
          </button>
          <div className="back-next-btn">
            <button type="" className="back-btn">
              BACK
            </button>
            <button type="" className="next-btn">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
