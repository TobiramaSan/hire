import React from "react";
import "./stepSix.css";
// import Step from "../../assets/step4.png";
import Plus from "../../assets/plus.png";
import EmploymentHistory from "../../svg-components/employmentHistory";
import Qualification from "../../svg-components/qualification";
import Legal from "../../svg-components/legal";
import Personal from "../../svg-components/personal";

const StepSix = ({ add, minus }) => {
  // Define dynamic data for rendering
  const personalDetails = [
    {
      title: "Personal Information",
      svgComponent: <Personal color="#0A65CC" />,
    },
    {
      title: "Employment History",
      svgComponent: <EmploymentHistory color="black" />,
    },
    {
      title: "Qualification",
      svgComponent: <Qualification color="black" />,
    },
    {
      title: "Legal",
      svgComponent: <Legal color="black" />,
    },
  ];

  const passFailData = [
    "Diploma",
    "Advance/Graduate Diploma",
    "Advance Diploma",
    "Post Graduate Diploma",
    "Others",
  ];

  return (
    <div className="stepsix">
      <div className="personal-details-header">
        {personalDetails.map((detail, index) => (
          <div
            key={index}
            className={`personal-details-single ${index === 0 ? "active" : ""}`}
          >
            {detail.svgComponent}
            <h2>{detail.title}</h2>
          </div>
        ))}
      </div>
      <div className="stepsix-container">
        <div className="pass-fail">
          {passFailData.map((item, index) => (
            <div key={index} className="pass">
              <label>{item}</label>
              <input type="checkbox" />
            </div>
          ))}
        </div>
        <div className="other-reference">
          <h1>OTHER SECONDARY REFERENCES</h1>
          <div className="reference-blk ">
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
          <button type="" className="add-new-btn">
            <img src={Plus} alt="" /> ADD ANOTHER CERTIFICATE
          </button>
        </div>
        <div className="technical">
          <h1>TECHNICAL VOCATIONAL EDUCATION</h1>
          <div className="technical-blk ">
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
          <button type="" className="add-new-btn">
            <img src={Plus} alt="" /> ADD ANOTHER CERTIFICATE
          </button>
        </div>
        <div className="outside-btns">
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

export default StepSix;
