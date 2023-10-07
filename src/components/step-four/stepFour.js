import React, { useState } from "react";
import "./stepFour.css";
import Personal from "../../svg-components/personal";
import EmploymentHistory from "../../svg-components/employmentHistory";
import Qualification from "../../svg-components/qualification";
import Legal from "../../svg-components/legal";
import Plus from "../../assets/plus.png";

const StepFour = ({ add, minus }) => {
  const [qualifications, setQualifications] = useState([
    { name: "Driver License", inputPlaceholder: "type of vehicle" },
    { name: "First Aid", inputPlaceholder: "level-date-institution" },
    { name: "IT", inputPlaceholder: "level-date-institution" },
    {
      name: "Software",
      inputPlaceholder: "level-date-institution-qualification name",
    },
    {
      name: "Certification",
      inputPlaceholder: "level-date-institution-qualification name",
    },
  ]);

  const [skills, setSkills] = useState([
    { name: "Adobe Illustrator", experience: "8 Year" },
    { name: "Adobe Photoshop", experience: "8 Year" },
    { name: "Communication Skills", experience: "5 Year" },
    { name: "CSS", experience: "8 Year" },
    { name: "HTML", experience: "8 Year" },
    { name: "JavaScript", experience: "5 Year" },
    { name: "Jquery", experience: "4 Year" },
    { name: "WordPress", experience: "3 Year" },
  ]);

  const [references, setReferences] = useState([
    {
      name: "Name and Surname",
      company: "Company",
      position: "Position",
      district: "District",
      phoneOffice: "+134564789",
      email: "@email.com",
      phoneMobile: "+134564789",
    },
  ]);

  const addQualification = () => {
    setQualifications([...qualifications, { name: "", inputPlaceholder: "" }]);
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", experience: "" }]);
  };

  const addReference = () => {
    setReferences([
      ...references,
      {
        name: "",
        company: "",
        position: "",
        district: "",
        phoneOffice: "",
        email: "",
        phoneMobile: "",
      },
    ]);
  };

  return (
    <div className="stepfour" fullStep={false} add={add} minus={minus}>
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
      <div className="stepfour-container">
        <div className="qualification-cont">
          <h1>OTHER QUALIFICATION</h1>
          <div className="qualification-main">
            <label className="main-label">Other Qualifications</label>
            <div className="list-qualification">
              {qualifications.map((qualification, index) => (
                <div key={index} className="drivers-license">
                  <div className="drivers-license-main">
                    <label>{qualification.name}</label>
                    <input type="checkbox" />
                  </div>
                  <input
                    className="last"
                    type="text"
                    placeholder={qualification.inputPlaceholder}
                    onChange={(e) => {
                      const updatedQualifications = [...qualifications];
                      updatedQualifications[index].inputPlaceholder =
                        e.target.value;
                      setQualifications(updatedQualifications);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="new-qualification-btn">
            <button onClick={addQualification}>
              <img src={Plus} alt="" /> Add New Qualification
            </button>
          </div>
        </div>

        <div className="skill-expert-cont">
          <h1>SKILLS/EXPERTISE</h1>

          <div className="beginner-intermediate-expert">
            <label>Beginner/Intermediate/Expert</label>
            <div className="table-container">
              <table>
                <tbody>
                  {skills.map((skill, index) => (
                    <tr key={index}>
                      <td className="one td">{skill.name}</td>
                      <td className="two td">{skill.experience}</td>
                      <td className="three td">
                        <span className="edit"> Edit</span> <div></div>
                        <span className="delete">Delete</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="add-new-skill-btn">
            <button onClick={addSkill}>
              <img src={Plus} alt=""></img>
              Add New Skill
            </button>
          </div>
        </div>

        <div className="references-cont">
          <h1>REFERENCES</h1>

          {references.map((reference, index) => (
            <div key={index} className="position-company">
              <div className="position">
                <div className="position-held-name">
                  <label>Name and Surname</label>
                  <input type="text" placeholder={reference.name} />
                </div>
                <div className="company-address">
                  <label>Company</label>
                  <input type="text" placeholder={reference.company} />
                </div>
              </div>
              <div className="position-district">
                <div className="position-name">
                  <label>Position</label>
                  <input type="text" placeholder={reference.position} />
                </div>
                <div className="company-district">
                  <label> District</label>
                  <input type="text" placeholder={reference.district} />
                </div>
              </div>
              <div className="phone">
                <label>Phone (office)</label>
                <input type="text" placeholder={reference.phoneOffice} />
              </div>
              <div className="email">
                <label>Email</label>
                <input type="email" placeholder={reference.email} />
              </div>
              <div className="add-new-skill-btn">
                <button onClick={addReference}>
                  <img src={Plus} alt="" /> Add New Skill
                </button>
              </div>
              <div className="phone-mobile">
                <label>Phone(Mobile)</label>
                <input type="text" placeholder={reference.phoneMobile} />
              </div>
            </div>
          ))}
        </div>
        <div className="motivation-cont">
          <h1>STANDARD COVER LETTER/MOTIVATION LETTER FOR JOB APPLICATION</h1>
          <div className="motivation-input">
            <label>Type your letter here</label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin fermentum condimentum mauris, non posuere urna consectetur quis. 
              Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla,
               non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. 
               Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, 
               vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. 
               Donec euismod accumsan sem et aliquam. D"
            ></textarea>
          </div>
          <button className="attach-upload">
            Attach or Upload Cover letter
          </button>
        </div>
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
  );
};

export default StepFour;
