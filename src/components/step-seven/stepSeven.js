import React from "react";
import "./stepSeven.css";
// import UserMulti from "../../utils/user-multi/userMulti";
// import Plus from "../../svg-components/plus/plus";
import EmploymentHistory from "../../svg-components/employmentHistory";
import Qualification from "../../svg-components/qualification";
import Legal from "../../svg-components/legal";
import Personal from "../../svg-components/personal";
import Rectangle from "../../assets/Ellipse 2.png";
const StepSeven = ({ add, minus }) => {
  return (
    <div className="stepseven" fullStep={false} add={add} minus={minus}>
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
      <div className="stepseven-container">
        <h1 className="main-legal">Legal</h1>
        <div className="legal-main">
          <h1 className="sub-legal">
            Have you ever been subject to any type of investigation or inquiry
            for any offense within the last 10 years
          </h1>
          <div className="yes-no">
            <div className="yes">
              <label>Yes</label>
              <input type="checkbox" />
            </div>
            <div className="no">
              <label>No</label>
              <input type="checkbox" />
            </div>
          </div>
          <div className="text-box">
            <label>If yes give details of date and offence</label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin fermentum condimentum mauris, non posuere urna consectetur quis. 
            Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, 
            non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. 
            Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, 
            vehicula lobortis quam. Duis diam mauris,
             convallis in risus in, gravida hendrerit lacus. 
             Donec euismod accumsan sem et aliquam. D"
            ></textarea>
          </div>
        </div>
        <div className="legal-main">
          <h1>
            Have you ever been prosecuted before a court of law and found guilty
            for any offense within the last 10 years?
          </h1>
          <div className="yes-no">
            <div className="yes">
              <label>Yes</label>
              <input type="checkbox" />
            </div>
            <div className="no">
              <label>No</label>
              <input type="checkbox" />
            </div>
          </div>
          <div className="text-box">
            <label>If yes give details of date and offence</label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin fermentum condimentum mauris, non posuere urna consectetur quis. 
            Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, 
            non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. 
            Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, 
            vehicula lobortis quam. Duis diam mauris,
             convallis in risus in, gravida hendrerit lacus. 
             Donec euismod accumsan sem et aliquam. D"
            ></textarea>
          </div>
        </div>
        <div className="acknowledgement">
          <div className="acknowledgement-header">
            <h1>
              I, the applicant of this profile, hereby acknowledge that all
              details given for this application are true and accurate and that
              i have not willfully changed or created virtual information.
            </h1>
          </div>

          <div className="yes-no">
            <div className="yes">
              <label>Yes</label>
              <input type="checkbox" />
            </div>
            <div className="no">
              <label>No</label>
              <input type="checkbox" />
            </div>
          </div>

          <button className="upload">Upload a Passport Size Photo</button>
        </div>
        <div className="profile-photo">
          <div className="picture">
            <h2>Edit Profile</h2>
            <div className="square-dp">
              <div className="dp">
                <img src={Rectangle} alt="" />
              </div>
            </div>
          </div>
          <div className="select-photo">
            <div className="dotted">
              <div>
                <h2> Drop files here</h2>
                <h2>or</h2>
                <button>Selct files</button>
              </div>
            </div>
          </div>
        </div>
        <div className="terms">
          <div>
            <input type="checkbox" />
            <h2>
              <span>I Agree</span> terms and conditions.
            </h2>
          </div>
          <button className="register">Register</button>
        </div>
        <button className="dashboard">Go to dashboard</button>
      </div>
    </div>
  );
};

export default StepSeven;
