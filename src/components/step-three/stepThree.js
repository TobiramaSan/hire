import React from "react";
import "./stepThree.css";
// import UserMulti from "../../utils/user-multi/userMulti";
import Personal from "../../svg-components/personal";

import Step from "../../assets/step3.png";
import EmploymentHistory from "../../svg-components/employmentHistory";
import Qualification from "../../svg-components/qualification";
import Legal from "../../svg-components/legal";
import Plus from "../../assets/plus.png";

const StepThree = ({ add, minus }) => {
  return (
    <div
      className="stepthree"
      img={Step}
      page="Education"
      add={add}
      minus={minus}
    >
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
      <div className="stepthree-cont">
        <div className="no-employments-form ">
          <button type="submit" className="no-employment-btn">
            NO EMPLOYMENT HISTORY
          </button>
          <input type="checkbox"></input>
        </div>
        <form>
          <div className="present-employment-form">
            <button type="" className="present-employment-btn">
              PRESENT EMPLOYMENT DETAILS
            </button>
            <div className="position-company">
              <div className="position">
                <div className="position-held-name">
                  <label>Position Held</label>
                  <input type="text" placeholder="local" />
                </div>
                <div className="company-address">
                  <label>Company Address</label>
                  <input type="text" placeholder="New York" />
                </div>
              </div>
              <div className="company-institution">
                <div className="company-institution-name">
                  <label>Company Institution</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="company-district">
                  <label> District</label>
                  <input type="text" placeholder="Washington" />
                </div>
              </div>
            </div>
          </div>

          <div className="second-section">
            <div className="phone">
              <label>Phone (office)</label>
              <input type="text" placeholder="+134564789" />
            </div>

            <div className="employment-status">
              <label>Employment Status</label>
              <div className="employment-type">
                <div className="payment">
                  <label>Payment</label>
                  <input type="checkbox" />
                </div>
                <div className="temporary">
                  <label>Temporary</label>
                  <input type="checkbox" />
                </div>
                <div className="trainee">
                  <label>Trainee</label>
                  <input type="checkbox" />
                </div>
                <div className="placement">
                  <label>Placement</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>

            <div className="duties">
              <label>Duties</label>
              <textarea
                type="textarea"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Ds"
              />
            </div>
          </div>
        </form>

        <form>
          <div className="previous-employment-form">
            <button type="" className="previous-employment-btn">
              PREVIOUS EMPLOYMENT DETAILS
            </button>
            <div className="position-company">
              <div className="position">
                <div className="position-held-name">
                  <label>Position Held</label>
                  <input type="text" placeholder="local" />
                </div>
                <div className="company-address">
                  <label>Company Address</label>
                  <input type="text" placeholder="New York" />
                </div>
              </div>
              <div className="company-institution">
                <div className="company-institution-name">
                  <label>Company Institution</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="company-district">
                  <label> District</label>
                  <input type="text" placeholder="Washington" />
                </div>
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className="phone">
              <label>Phone (office)</label>
              <input type="text" placeholder="+134564789" />
            </div>

            <div className="employment-status">
              <label>Employment Status</label>
              <div className="employment-type">
                <div className="payment">
                  <label>Payment</label>
                  <input type="checkbox" />
                </div>
                <div className="temporary">
                  <label>Temporary</label>
                  <input type="checkbox" />
                </div>
                <div className="trainee">
                  <label>Trainee</label>
                  <input type="checkbox" />
                </div>
                <div className="placement">
                  <label>Placement</label>
                  <input type="checkbox" />
                </div>
              </div>
            </div>

            <div className="duties">
              <label>Duties</label>
              <textarea
                type="textarea"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum condimentum mauris, non posuere urna consectetur quis. Suspendisse semper eu eros eget convallis. Etiam mattis blandit nulla, non venenatis risus varius vel. Morbi fringilla dignissim elit id blandit. Pellentesque vel luctus felis. Vestibulum eros nibh, consequat ut felis in, vehicula lobortis quam. Duis diam mauris, convallis in risus in, gravida hendrerit lacus. Donec euismod accumsan sem et aliquam. Ds"
              />
            </div>
          </div>
        </form>
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

export default StepThree;
