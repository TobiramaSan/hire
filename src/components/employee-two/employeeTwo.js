import React from "react";
import "./employeeTwo.css";
import UserMulti from "../../utils/user-multi/userMulti";
import Step from "../../assets/employee2.png";
import Plus from "../../svg-components/plus/plus";
import WhiteRectangle from "../../svg-components/white-rectangle/whiteRectangle";

const EmployeeTwo = () => {
  return (
    <UserMulti page="JOB SPECIFICATION" img={Step}>
      <div className="employer-personal-details">
        <div className="rectangle-container">
          <div className="group-child4" />
          <div className="mode-of-application">Mode of application Review</div>
          <div className="group-child5" />
          <div className="hirememu-live-job-container">
            <p className="job-requirement">Hireme.mu live job</p>
            <p className="job-requirement">portal</p>
          </div>
          <div className="group-child6" />
          <div className="divert-applications-to">Divert applications to your company website job portal</div>
          <div className="group-child7" />
          <div className="go-to-cart">Go to cart Basket</div>
          <div className="group-child8" />
          <div className="view-available-packages">View available packages</div>
          <div className="group-child9" />
          <div className="group-child10" />
        </div>
        <div className="group-div">
          <div className="group-child11" />
          <div className="group-parent">
            <div className="vector-group">
              <Plus />
              <div className="group-child12" />
              <div className="add-another-skill">Add another skill or compentency</div>
            </div>
            <WhiteRectangle />
            <WhiteRectangle />
            <WhiteRectangle />
            <WhiteRectangle />
            <WhiteRectangle />
            <WhiteRectangle />
            <WhiteRectangle />
          </div>
          <div className="group-child20" />
          <div className="key-skills">Key Skills</div>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child21" />
          <div className="qualifications">Qualifications</div>
          <div className="group-child22" />
          <div className="work-experience">Work Experience</div>
          <div className="group-child23" />
          <div className="salary-grid">Salary Grid</div>
          <div className="group-child24" />
        </div>
        <div className="rectangle-parent2">
          <div className="group-child25" />
          <div className="group-child26" />
          <div className="group-child27" />
          <div className="group-child28" />
          <div className="group-child29" />
          <div className="group-child30" />
          <div className="group-child31" />
          <div className="group-child32" />
          <div className="group-child33" />
          <div className="group-child34" />
          <div className="group-child35" />
          <div className="group-child36" />
          <div className="group-child37" />
          <div className="group-child38" />
          <div className="nil">Nil</div>
          <div className="rectangle-parent3">
            <div className="group-child39" />
            <div className="div">5000-10000</div>
          </div>
          <div className="rectangle-parent4">
            <div className="group-child40" />
            <div className="div1">10000-15000</div>
          </div>
          <div className="rectangle-parent5">
            <div className="group-child40" />
            <div className="div1">15000-20000</div>
          </div>
          <div className="group-child42" />
          <div className="years">3-5 Years</div>
          <div className="rectangle-parent6">
            <div className="group-child40" />
            <div className="div1">1-2 Years</div>
          </div>
          <div className="rectangle-parent7">
            <div className="group-child40" />
            <div className="div1">20000-25000</div>
          </div>
          <div className="rectangle-parent8">
            <div className="group-child45" />
            <div className="years2">{`>10 Years`}</div>
          </div>
          <div className="rectangle-parent9">
            <div className="group-child46" />
            <div className="years3">5-10 Years</div>
          </div>
          <div className="rectangle-parent10">
            <div className="group-child47" />
            <div className="not-disclosed">25000-30000</div>
          </div>
          <div className="rectangle-parent11">
            <div className="group-child47" />
            <div className="not-disclosed">30000-35000</div>
          </div>
          <div className="div6">35000-45000</div>
          <div className="rectangle-parent12">
            <div className="group-child47" />
            <div className="not-disclosed">Not disclosed</div>
          </div>
        </div>
        <div className="employer-personal-details-inner" />
        <div className="job-criteria">Job Criteria</div>
        <div className="group-container">
          <div className="rectangle-parent13">
            <div className="group-child50" />
            <div className="job-title">Job Title</div>
            <div className="group-child51" />
            <div className="job-type">Job Type</div>
            <div className="group-child52" />
            <div className="job-status">Job Status</div>
          </div>
          <div className="group-child53" />
          <div className="group-child54" />
          <div className="group-child55" />
        </div>
        <div className="skills-and-competencies-container">
          <p className="skills-and-competencies">Skills and competencies: ex:-</p>
          <p className="communication-skills-it">{`Communication skills, IT Experience, `}</p>
          <p className="communication-skills-it">{`Ability to work under a team or own `}</p>
          <p className="communication-skills-it">initiative, good command of written</p>
          <p className="communication-skills-it">and spoken of a language, and others</p>
        </div>
      </div>
    </UserMulti>
  );
};

export default EmployeeTwo;
