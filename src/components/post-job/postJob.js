import React, { useState, useEffect } from "react";
import "./postJob.css";
import Loader from "../loader/loader";
import { useForm } from "react-hook-form";
import { onValue, ref, set, update } from "firebase/database";
import { db } from "../../utils/firebase/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import { jobCategories } from "../../utils/data/data";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data.employers !== null) {
        Object.entries(data.employers).filter((item) => {
          if (item[1]?.email === userData?.email) {
            setUser(item[1]);
          }
          return item;
        });
      }
    });
  }, [userData?.email]);
  let today = new Date();
  let date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      title: "",
      company: "",
      category: "",
      minimumSalary: "",
      maximumSalary: "",
      salaryType: "",
      experience: "",
      jobRole: "",
      qualification: "",
      jobType: "",
      description: "",
      extraBenefit: "",
    },
  });
  const generate = (n) => {
    var add = 1,
      max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (n > max) {
      return generate(max) + generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
  };
  const submit = (e) => {
    setLoading(true);
    const id = generate(6);
    if (userData.currentJobs === userData.totalJobs) {
      toast.error("You have used up your available jobs!!!!");
      setLoading(false);
    } else {
      set(ref(db, "jobs/" + id), {
        id: id,
        title: e.title,
        company: e.company,
        category: e.category,
        minimumSalary: e.minimumSalary,
        maximumSalary: e.maximumSalary,
        salaryType: e.salaryType,
        experience: e.experience,
        jobRole: e.jobRole,
        qualification: e.qualification,
        jobType: e.jobType,
        description: e.description,
        extraBenefit: e.extraBenefit,
        location: e.location,
        user: userData?.fullName,
        email: userData?.email,
        userId: userData?.id,
        status: "Published",
        moderationStatus: "Approved",
        createdAt: date,
        expiry: userData.package === "Free" ? addDays(today, 10) : addDays(today, 10),
      });
      update(ref(db, "employers/" + user.id), {
        currentJobs: userData.currentJobs + 1,
      });
      setLoading(false);
      toast.success("Added successfully");
      navigate("/employee-job");
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <ToastContainer />
      <div className="post-job-container">
        <div className="post-job-wrapper">
          <div className="post-job-cont">
            <div className="post-job-details">
              <h2>Job Details</h2>
              <div className="post-details-container">
                <div className="post-job-single">
                  <label>
                    Title <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    {...register("title", {
                      required: "Please enter Title",
                      pattern: {
                        value: /^[A-Za-z ]+$/i,
                        message: "Only Alphabelts allowed",
                      },
                    })}
                  />
                  <p className="add-profile-error">{errors?.title?.message}</p>
                </div>
                <div className="post-job-single">
                  <label>
                    Company <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company"
                    {...register("company", {
                      required: "Please enter Company",
                      pattern: {
                        value: /^[A-Za-z ]+$/i,
                        message: "Only Alphabelts allowed",
                      },
                    })}
                  />
                  <p className="add-profile-error">{errors?.company?.message}</p>
                </div>
                <div className="post-job-single">
                  <label>
                    Category <span>*</span>
                  </label>
                  <select
                    {...register("category", {
                      required: "Please choose Category",
                      //   pattern: {
                      //     value: /^[A-Za-z ]+$/i,
                      //     message: "Only Alphabelts allowed",
                      //   },
                    })}>
                    <option value="">Category</option>
                    {jobCategories?.map((item, index) => {
                      return (
                        <option value={item.name} key={index}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  {/* <input type="text" placeholder="Category" /> */}
                  <p className="add-profile-error">{errors?.category?.message}</p>
                </div>
                <div className="post-job-single">
                  <label>
                    Location <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Location"
                    {...register("location", {
                      required: "Please enter a Location",
                      pattern: {
                        value: /^[A-Za-z ]+$/i,
                        message: "Only Alphabelts allowed",
                      },
                    })}
                  />
                  <p className="add-profile-error">{errors?.location?.message}</p>
                </div>
              </div>
            </div>
            <div className="post-job-details">
              <h2>Job Experience</h2>
              <div className="post-details-container">
                <div className="post-job-experience">
                  <div className="post-experience-double">
                    <div className="post-experience-single">
                      <label>1-2 years</label>
                      <input
                        type="radio"
                        name="experience"
                        value="1-2 years"
                        {...register("experience", {
                          required: "Please pick Experience Range",
                        })}
                      />
                    </div>
                    <div className="post-experience-single">
                      <label>3-5 years</label>
                      <input
                        type="radio"
                        name="experience"
                        value="3-5 years"
                        {...register("experience", {
                          required: "Please pick Experience Range",
                        })}
                      />
                    </div>
                  </div>
                  <div className="post-experience-double">
                    <div className="post-experience-single">
                      <label>5-10years</label>
                      <input
                        type="radio"
                        name="experience"
                        value="5-10 years"
                        {...register("experience", {
                          required: "Please pick Experience Range",
                        })}
                      />
                    </div>
                    <div className="post-experience-single">
                      <label>&gt;10 years</label>
                      <input
                        type="radio"
                        name="experience"
                        value=">10 years"
                        {...register("experience", {
                          required: "Please pick Experience Range",
                        })}
                      />
                    </div>
                  </div>
                  <p className="add-profile-error">{errors?.experience?.message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="post-job-cont">
            <div className="post-job-details">
              <h2>Salary Details</h2>
              <div className="post-details-container">
                <div className="post-job-double">
                  <div className="post-job-group">
                    <label>
                      Minimum Salary (৳) <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Minimum Salary"
                      {...register("minimumSalary", {
                        required: "Please enter Minimum Salary",
                        pattern: {
                          value: /^[0-9 ]+$/i,
                          message: "Minimum Salary can only be numbers",
                        },
                      })}
                    />
                    <p className="add-profile-error">{errors?.minimumSalary?.message}</p>
                  </div>
                  <div className="post-job-group">
                    <label>
                      Maximum Salary (৳) <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Maximum Salary"
                      {...register("maximumSalary", {
                        required: "Please enter Maximum Salary",
                        pattern: {
                          value: /^[0-9 ]+$/i,
                          message: "Maximum Salary can only be numbers",
                        },
                      })}
                    />
                    <p className="add-profile-error">{errors?.maximumSalary?.message}</p>
                  </div>
                </div>
                <div className="post-job-double">
                  <div className="post-job-group">
                    <label>
                      Salary Type <span>*</span>
                    </label>
                    <select
                      {...register("salaryType", {
                        required: "Please choose Salary Type",
                      })}>
                      <option value="">Choose Salary type</option>
                      <option value="Hourly">Hourly</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                    <p className="add-profile-error">{errors?.salaryType?.message}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="post-job-details">
              <h2>Applicant Options</h2>
              <div className="post-details-container">
                <div className="post-job-single">
                  <label>
                    Receive Applications <span>*</span>
                  </label>
                  <input type="text" placeholder="Receive Applications" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="post-job-details">
          <h2>Description</h2>
          <div className="post-details-container">
            <div className="post-job-double">
              <div className="post-job-group">
                <label>
                  Qualification <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Qualification"
                  {...register("qualification", {
                    required: "Please enter Qualification",
                    pattern: {
                      value: /^[A-Za-z ]+$/i,
                      message: "Only Alphabelts allowed",
                    },
                  })}
                />
                <p className="add-profile-error">{errors?.qualification?.message}</p>
              </div>
              <div className="post-job-group">
                <label>
                  Job Role <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Job Role"
                  {...register("jobRole", {
                    required: "Please enter Job Role",
                    pattern: {
                      value: /^[A-Za-z ]+$/i,
                      message: "Only Alphabelts allowed",
                    },
                  })}
                />
                <p className="add-profile-error">{errors?.jobRole?.message}</p>
              </div>
            </div>

            <div className="post-job-double">
              <div className="post-job-group">
                <label>
                  Job Type <span>*</span>
                </label>
                <select
                  {...register("jobType", {
                    required: "Please enter Job Type",
                    // pattern: {
                    //   value: /^[A-Za-z ]+$/i,
                    //   message: "Only Alphabelts allowed",
                    // },
                  })}>
                  <option value="">Job Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
                {/* <input type="text" placeholder="Job Type" /> */}
                <p className="add-profile-error">{errors?.jobType?.message}</p>
              </div>
              <div className="post-job-group">
                <label>
                  Extra Benefit <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Extra Benefit"
                  {...register("extraBenefit", {
                    // required: "Please enter Category",
                    //   pattern: {
                    //     value: /^[A-Za-z ]+$/i,
                    //     message: "Only Alphabelts allowed",
                    //   },
                  })}
                />
              </div>
            </div>
            <div className="post-job-single">
              <label>
                Description <span>*</span>
              </label>
              <textarea
                {...register("description", {
                  required: "Please enter Description",
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Only Alphabelts allowed",
                  },
                })}></textarea>
              <p className="add-profile-error">{errors?.description?.message}</p>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <button type="submit" className="post-job-button">
          Create Job
        </button>
      )}
    </form>
  );
};

export default PostJob;
