import React from "react";
import "./stepTwo.css";
// import UserMulti from "../../utils/user-multi/userMulti";
// import Step from "../../assets/step-2.png";
import Personal from "../../svg-components/personal";
import EmploymentHistory from "../../svg-components/employmentHistory";
import Qualification from "../../svg-components/qualification";
import Legal from "../../svg-components/legal";

const StepTwo = ({ setFormData, formData }) => {
  return (
    <div className="personal-details-cont">
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

      <div className="personal-details-body">
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Full Name</label>
            <input type="text" value={formData?.name} />
          </div>
          <div className="add-profile-group">
            <label>Title</label>
            <input
              type="text"
              // {...register("positionHeld", {
              //   required: "Please enter  position held",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              name="positionHeld"
              placeholder="Mr./Mrs/Miss"
            />
            {/* <p className="add-profile-error">{errors?.positionHeld?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Phone (Home)</label>
            <input type="text" placeholder="+1234567890" />
          </div>
          <div className="add-profile-group">
            <label>Phone (Mobile)</label>
            <input
              type="text"
              // {...register("positionHeld", {
              //   required: "Please enter  position held",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              name="positionHeld"
              placeholder="+1234567890"
            />
            {/* <p className="add-profile-error">{errors?.positionHeld?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Gender</label>
            <input type="text" placeholder="Male" />
          </div>
          <div className="add-profile-group">
            <label>Martial Status</label>
            <input
              type="text"
              // {...register("positionHeld", {
              //   required: "Please enter  position held",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              name="positionHeld"
              placeholder="Single"
            />
            {/* <p className="add-profile-error">{errors?.positionHeld?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>State/Province</label>
            <input
              type="text"
              // {...register("state", {
              //   required: "Please enter State/Province",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
            />
            {/* <p className="add-profile-error">{errors?.state?.message}</p> */}
          </div>
          <div className="add-profile-group">
            <label>District</label>
            <select
            // {...register("district", {
            //   required: "Please choose Address",
            // })}
            >
              <option value="">Washington</option>
              <option value="Washington">Washington</option>
            </select>
            {/* <p className="add-profile-error">{errors?.district?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Country</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
          <div className="add-profile-group">
            <label>Street Address</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              placeholder="Dummy Street Address 123 USA"
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>Age</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
          <div className="add-profile-group">
            <label>Date of Birth</label>
            <input
              type="date"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              placeholder="06/09/2009"
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
        </div>
        <div className="add-profile-double">
          <div className="add-profile-group">
            <label>National ID Number</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
          <div className="add-profile-group">
            <label>Security Question</label>
            <input
              type="text"
              // {...register("country", {
              //   required: "Please enter Country",
              //   pattern: {
              //     value: /^[A-Za-z ]+$/i,
              //     message: "Only Alphabelts allowed",
              //   },
              // })}
              placeholder="Enter Name of Pet Name"
            />
            {/* <p className="add-profile-error">{errors?.country?.message}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
