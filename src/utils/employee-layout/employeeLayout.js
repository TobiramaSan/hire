import React, { useEffect, useState } from "react";
import "./employeeLayout.css";
import EmployeeSidebar from "../../components/employee-sidebar/employeeSidebar";
import EmployeeHeader from "../../components/employee-header/employeeHeader";
import Home from "../../assets/home.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import { auth, db } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import Idle from "react-idle";

const EmployeeLayout = ({ children, page }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let userData = JSON.parse(window.localStorage.getItem("user"));
    if (userData !== null) {
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        if (data.employers !== null) {
          Object.entries(data.employers).filter((item) => {
            if (item[1].email === userData?.email) {
              setUser(item[1]);
              if (item[1].profileSetup === false) {
                setTimeout(() => {
                  navigate("/employee-add-profile");
                }, 3000);
              }
            }
            return item;
          });
        }
      });
    } else {
      console.log("test");
      navigate("/login");
    }
  }, [navigate]);
  const preloadCornify = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed out successfully");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="employee-layout-container">
      <Idle
        timeout={300000}
        onChange={({ idle }) => {
          if (idle) {
            preloadCornify();
          }
        }}
      />
      <EmployeeSidebar action={preloadCornify} />
      <div className="employee-layout-body">
        <EmployeeHeader name={user?.fullName} employee={user?.img} />
        <div className="employee-layout-wrapper">
          {page === "Single" ? null : (
            <div className="employee-layout-head">
              <h2>{page === "Profile" ? "Company Profile" : page}</h2>
              <div className="employee-layout-cont">
                {page === "Profile" ? (
                  <button
                    onClick={() => {
                      navigate("/employee-edit-profile");
                    }}>
                    Edit Profile
                  </button>
                ) : null}
                <div className="employee-layout-link">
                  <div>
                    <img src={Home} alt="home" />
                    <p>Employer</p>
                  </div>
                  <div>
                    <img src={ArrowRight} alt="arrow-right" />
                    <p>{page}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout;
