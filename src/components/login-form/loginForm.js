import React, { useState } from "react";
import "./loginForm.css";
import Form from "../form/form";
import { useNavigate } from "react-router-dom";
import Google from "../../svg-components/google/google";
import { auth, provider, db } from "../../utils/firebase/firebase-config";
import { ref, onValue } from "firebase/database";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [state, setState] = useState("Candidate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
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
        buttonText="Login"
        type="login"
        loading={loading}
        email={email}
        emailChange={(e) => {
          setEmail(e.target.value);
        }}
        password={password}
        passwordChange={(e) => {
          setPassword(e.target.value);
        }}
        buttonAction={() => {
          setLoading(true);
          signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
              // sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
              console.log(response);
              setLoading(false);
              if (response.user.emailVerified === false) {
                toast.error("Email not verified, kindly verify your mail before trying again");
              } else {
                if (state === "Employer") {
                  onValue(ref(db), (snapshot) => {
                    const data = snapshot.val();
                    if (data.employers !== null) {
                      setLoading(false);
                      Object.entries(data.employers).filter((item) => {
                        if (item[1].email === email) {
                          localStorage.setItem("user", JSON.stringify(item[1]));
                          setLoading(false);
                          navigate("/employee-dashboard");
                        }
                        return item;
                      });
                    } else {
                      setLoading(false);
                      toast.error("Something went wrong!!!Try again");
                    }
                  });
                } else {
                  onValue(ref(db), (snapshot) => {
                    const data = snapshot.val();
                    if (data?.candidates !== null) {
                      setLoading(false);
                      Object.entries(data?.candidates).filter((item) => {
                        if (item[1].email === email) {
                          if (item[1].multiStep === false) {
                            setLoading(false);
                            navigate("/register-multi");
                          } else {
                            setLoading(false);
                            navigate("/candidate-dashboard");
                            localStorage.setItem("candidates", JSON.stringify(item[1]));
                          }
                        }
                        return item;
                      });
                    } else {
                      setLoading(false);
                      toast.error("Something went wrong!!!Try again");
                    }
                  });
                }
              }
            })
            .catch((error) => {
              console.log(error);
              if (error.code === "auth/wrong-password") {
                toast.error("Please check the Password");
                setLoading(false);
              }
              if (error.code === "auth/user-not-found") {
                toast.error("Please check the Email");
                setLoading(false);
              }
              if (error.code === "auth/network-request-failed") {
                toast.error("Something went wrong!! Try again!!!");
                setLoading(false);
              }
            });
        }}
      />
      <div className="register-form-other">
        <p>or</p>
        <div
          className="register-form-google"
          onClick={() => {
            signInWithPopup(auth, provider)
              .then((datas) => {
                if (state === "Employer") {
                  onValue(ref(db), (snapshot) => {
                    const data = snapshot.val();
                    if (data.employers !== null) {
                      setLoading(false);
                      Object.entries(data.employers).filter((item) => {
                        if (item[1].email === datas.user.email) {
                          // setLoading(false);
                          navigate("/employee-dashboard");
                        }
                        return item;
                      });
                    } else {
                      setLoading(false);
                      toast.error("Something went wrong!!!Try again");
                    }
                  });
                } else {
                  navigate("/");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }}>
          <Google />
          <p>Login with Google</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
