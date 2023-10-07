import React, { useState, useEffect } from "react";
import "./employeeAbout.css";
import NoImage from "../../assets/no-image-square.png";
import Time from "../../assets/about-time.svg";
import Location from "../../assets/about-location.svg";
import Phone from "../../assets/about-phone.svg";
import Envelope from "../../assets/about-envelope.svg";
import Globe from "../../assets/about-globe.svg";
import { db } from "../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import EmployeeJobs from "../employee-jobs/employeeJobs";

const EmployeeAbout = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState("");
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data.employers !== null) {
        Object.entries(data.employers).filter((item) => {
          if (item[1].id === user?.id) {
            setData(item[1]);
          }
          return item;
        });
      } else {
        toast.error("Something went wrong!!!Try again");
      }
      if (data.jobs !== null) {
        if (data?.jobs !== undefined) {
          Object.entries(data?.jobs).filter((item) => {
            if (item[1].userId === user?.id) {
              setJobs((arr) => [...arr, item[1]]);
            }
            return item;
          });
        }
      } else {
        toast.error("Something went wrong!!!Try again2");
      }
    });
  }, [user?.id, navigate]);
  return (
    <div className="employee-about-container">
      <ToastContainer />
      <div className="employee-about-profile">
        <div className="employee-about-img">
          <img src={user?.img === "" ? NoImage : user?.img} alt="noImage" />
          <div className="employee-about-text">
            <h2>{user?.fullName}</h2>
            <p>{data?.sector}</p>
            <div className="employee-about-single">
              <img src={Time} alt="phone" />
              <p>Member Since, {new Date(user?.creationTime).toDateString()}</p>
            </div>
            <div className="employee-about-single">
              <img src={Location} alt="phone" />
              <p>Your Location Address {data?.companyAddress}</p>
            </div>
          </div>
        </div>
        <div className="employee-about-details">
          <div className="employee-about-test">
            <div className="employee-about-single">
              <img src={Phone} alt="phone" />
              <p>{data?.phoneOffice}</p>
            </div>
            <div className="employee-about-single">
              <img src={Envelope} alt="phone" />
              <p>{user?.email}</p>
            </div>
            <div className="employee-about-single">
              <img src={Globe} alt="phone" />
              <p>{data?.websiteUrl}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="employee-about-about">
        <h2>About Company</h2>
        <p>{data?.description}</p>
      </div>
      <div className="employee-about-more">
        <div className="employee-about-company">
          <h2>Company Detail</h2>
          <div className="employee-about-detail">
            <div>
              <h2>Industry</h2>
              <p>{data?.industry}</p>
            </div>
            <div>
              <h2>Total Employees</h2>
              <p>{data?.companySize}</p>
            </div>
            {/* <div>
              <h2>Established In</h2>
              <p>{data?.established}</p>
            </div> */}
            <div>
              <h2>Current Jobs</h2>
              <p>{data?.currentJobs}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="employee-about-previous">
        <h2>Jobs Posted</h2>
        {jobs?.map((item, index) => {
          return <EmployeeJobs description={item.description} key={index} title={item.title} company={item?.company} jobType={item?.jobType} location={item?.location} />;
        })}
      </div>
    </div>
  );
};

export default EmployeeAbout;
