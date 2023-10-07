import React from "react";
import "./stepEight.css";
import UserMulti from "../../utils/user-multi/userMulti";
import Step from "../../assets/group8.png";
import Upload from "../../assets/upload.png";

const StepEight = ({ add, minus }) => {
  return (
    <UserMulti page="Legal" img={Step} add={add} minus={minus}>
      <div className="candidate-sign-up-step-24">
        <div className="rectangle-container">
          <div className="group-child2" />
          <div className="have-you-ever">
            Have you ever been subject to any type of investigation or inquiry
            for any offense within the last 10 years
          </div>
        </div>
        <div className="group-div">
          <div className="group-child3" />
          <div className="have-you-ever1">
            Have you ever been prosecuted before a court of law and found guilty
            for any offense within the last 10 years?
          </div>
        </div>
        <div className="candidate-sign-up-step-24-item" />
        <div className="candidate-sign-up-step-24-inner" />
        <div className="rectangle-parent1">
          <div className="group-child4" />
          <div className="group-child5" />
          <div className="group-child6" />
          <div className="group-child7" />
          <div className="rectangle-parent2">
            <div className="group-child8" />
            <div className="no">No</div>
          </div>
          <div className="rectangle-parent3">
            <div className="group-child9" />
            <div className="if-yes-give-container">
              <p className="self-declaration">{`If yes give details and date of `}</p>
              <p className="self-declaration">the offence</p>
            </div>
          </div>
          <div className="rectangle-parent4">
            <div className="group-child9" />
            <div className="if-yes-give-container">
              <p className="self-declaration">{`If yes give details and date of `}</p>
              <p className="self-declaration">the offence</p>
            </div>
          </div>
          <div className="rectangle-parent5">
            <div className="group-child8" />
            <div className="yes">Yes</div>
          </div>
          <div className="group-child12" />
          <div className="group-child13" />
          <div className="rectangle-parent6">
            <div className="group-child14" />
            <div className="no">No</div>
          </div>
          <div className="rectangle-parent7">
            <div className="group-child15" />
            <div className="yes1">Yes</div>
          </div>
          <div className="rectangle-parent8">
            <div className="group-child8" />
            <div className="no">No</div>
          </div>
          <div className="rectangle-parent9">
            <div className="group-child15" />
            <div className="yes2">Yes</div>
          </div>
        </div>
        <div className="group-parent">
          <div className="rectangle-wrapper">
            <div className="group-child18" />
          </div>
          <div className="i-the-applicant-container">
            <p className="self-declaration">
              I, the applicant of this profile, hereby acknowledge that all
              details given for this application are true and
            </p>
            <p className="self-declaration">
              accurate and that i have not willfully changed or created virtual
              information.
            </p>
          </div>
        </div>
        <div className="rectangle-parent10">
          <div className="group-child19" />
          <div className="upload-a-passport">Upload a Passport Size Photo</div>
        </div>
        <div className="rectangle-parent11">
          <div className="group-child20" />
          <div className="upload">Upload</div>
        </div>
        <img
          className="main-page2-edited-2023-page-00"
          alt="upload"
          src={Upload}
        />
      </div>
    </UserMulti>
  );
};

export default StepEight;
