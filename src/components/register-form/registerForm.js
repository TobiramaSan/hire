import React, { useState } from "react";
import "./registerForm.css";
import Form from "../form/form";
import { useNavigate } from "react-router-dom";
import Google from "../../svg-components/google/google";
import { auth, provider, db } from "../../utils/firebase/firebase-config";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [state, setState] = useState("Candidate");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="register-form-container">
      <ToastContainer />
      <div className="register-form-head">
        <button
          className={state === "Candidate" ? "register-form-active" : "register-form-button"}
          onClick={() => {
            setState("Candidate");
          }}>
          Candidate
        </button>
        <button
          className={state === "Employer" ? "register-form-active" : "register-form-button"}
          onClick={() => {
            setState("Employer");
          }}>
          Employer
        </button>
      </div>
      <Form
        loading={loading}
        buttonText="Register"
        fullName={fullName}
        fullNameChange={(e) => {
          setFullName(e.target.value);
        }}
        email={email}
        emailChange={(e) => {
          setEmail(e.target.value);
        }}
        password={password}
        passwordChange={(e) => {
          setPassword(e.target.value);
        }}
        confirmPassword={confirmPassword}
        confirmPasswordChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        placeholder={state === "Employer" ? "Company Name" : "Full Name"}
        buttonAction={() => {
          setLoading(true);
          if (password !== confirmPassword) {
            toast.error("Passwords do not Match");
            setLoading(false);
          } else {
            createUserWithEmailAndPassword(auth, email, password)
              .then((response) => {
                // sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
                console.log(response);
                if (state === "Candidate") {
                  set(ref(db, "candidates/" + response.user.uid), {
                    id: response.user.uid,
                    fullName: fullName,
                    title: "",
                    gender: "",
                    maritalStatus: "",
                    town: "",
                    district: "",
                    state: "",
                    nationality: "",
                    dob: "",
                    phoneMobile: "",
                    phoneHome: "",
                    streetAddress: "",
                    age: "",
                    nationalID: "",
                    previousEmployment: "",
                    currentEmployment: "",
                    skills: "",
                    otherQualifications: "",
                    references: "",
                    coverLetter: "",
                    certificates: "",
                    technicalVocation: "",
                    tertiaryQualifications: "",
                    investigation: false,
                    investigationReason: "",
                    prosecuted: false,
                    prosecutedReason: "",
                    email: email,
                    img: "",
                    multiStep: false,
                  })
                    .then(() => {
                      sendEmailVerification(auth.currentUser).then(() => {
                        updateProfile(auth.currentUser, { displayName: fullName })
                          .then(() => {
                            navigate("/verify");
                            setLoading(false);
                          })
                          .catch((error) => {
                            toast.error("Something went wrong!!! Try again");
                          });
                      });
                    })
                    .catch((error) => {
                      toast.error("Something went wrong!!! Try again");
                    });
                } else {
                  set(ref(db, "employers/" + response.user.uid), {
                    id: response.user.uid,
                    fullName: fullName,
                    email: email,
                    img: "",
                    profileSetup: false,
                    positionHeld: "",
                    industry: "",
                    sector: "",
                    description: "",
                    companyAddress: "",
                    websiteUrl: "",
                    established: "",
                    state: "",
                    district: "",
                    phoneHome: "",
                    phoneMobile: "",
                    phoneOffice: "",
                    companySize: "",
                    country: "",
                    currentJobs: 0,
                    totalJobs: 5,
                    package: "Free",
                    creationTime: response.user.metadata.creationTime,
                  })
                    .then(() => {
                      sendEmailVerification(auth.currentUser).then(() => {
                        updateProfile(auth.currentUser, { displayName: fullName })
                          .then(() => {
                            navigate("/verify");
                            setLoading(false);
                          })
                          .catch((error) => {
                            toast.error("Something went wrong!!! Try again");
                          });
                      });
                    })
                    .catch((error) => {
                      toast.error("Something went wrong!!! Try again");
                    });
                }
              })
              .catch((error) => {
                console.log(error);
                if (error.code === "auth/email-already-in-use") {
                  toast.error("Email Already in Use");
                  setLoading(false);
                }
                if (error.code === "auth/weak-password") {
                  toast.error("You have a weak password");
                  setLoading(false);
                }
              });
          }
        }}
      />
      <div className="register-form-other">
        <p>or</p>
        <div
          className="register-form-google"
          onClick={() => {
            signInWithPopup(auth, provider)
              .then((data) => {
                if (state === "Candidate") {
                  onValue(ref(db), (snapshot) => {
                    const userData = snapshot.val();
                    if (userData.candidates !== null) {
                      setLoading(false);
                      Object.entries(userData.candidates).filter((item) => {
                        if (item[1].email === data.user.email) {
                          setLoading(false);
                          toast.error("Account already Exists");
                        }
                        return item;
                      });
                    } else {
                      set(ref(db, "candidates/" + data.user.uid), {
                        id: data.user.uid,
                        email: data.user.email,
                        img: data.user.photoURL,
                        fullName: data.user.displayName,
                        multiStep: false,
                        title: "",
                        gender: "",
                        maritalStatus: "",
                        town: "",
                        district: "",
                        state: "",
                        nationality: "",
                        dob: "",
                        phoneMobile: "",
                        phoneHome: "",
                        streetAddress: "",
                        age: "",
                        nationalID: "",
                        previousEmployment: "",
                        currentEmployment: "",
                        skills: "",
                        otherQualifications: "",
                        references: "",
                        coverLetter: "",
                        certificates: "",
                        technicalVocation: "",
                        tertiaryQualifications: "",
                        investigation: false,
                        investigationReason: "",
                        prosecuted: false,
                        prosecutedReason: "",
                      });
                    }
                  });
                } else {
                  onValue(ref(db), (snapshot) => {
                    const userData = snapshot.val();
                    if (userData.employers !== null) {
                      setLoading(false);
                      Object.entries(userData.employers).filter((item) => {
                        if (item[1].email === data.user.email) {
                          setLoading(false);
                          toast.error("Account already Exists");
                        }
                        return item;
                      });
                    } else {
                      set(ref(db, "employers/" + data.user.uid), {
                        id: data.user.uid,
                        email: data.user.email,
                        img: data.user.photoURL,
                        fullName: data.user.displayName,
                        profileSetup: false,
                        positionHeld: "",
                        industry: "",
                        sector: "",
                        description: "",
                        companyAddress: "",
                        websiteUrl: "",
                        established: "",
                        state: "",
                        district: "",
                        phoneHome: "",
                        phoneMobile: "",
                        phoneOffice: "",
                        companySize: "",
                        country: "",
                        currentJobs: 0,
                        totalJobs: 5,
                        package: "Free",
                        creationTime: data.metadata.creationTime,
                      });
                    }
                  });
                }
                navigate("/login");
                console.log(data);
              })
              .catch((error) => {
                console.log(error);
              });
          }}>
          <Google />
          <p>Register with Google</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
