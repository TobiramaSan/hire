import React, { useEffect, useState } from "react";
import "./addProfile.css";
import Logo from "../../assets/no-image-square.png";
import { useForm } from "react-hook-form";
import { auth, storage, db } from "../../utils/firebase/firebase-config";
import { ref, update } from "firebase/database";
import { ref as imgref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/loader";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProfile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [token, setToken] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (e) => {
    console.log(e);
    setLoading(true);
    const storageRef = imgref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        toast.error("Error in Uploading Image try again!!!");
        console.log(err);
        setLoading(false);
      },
      async () => {
        // download url
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          updateProfile(auth.currentUser, { photoURL: url })
            .then(() => {
              update(ref(db, "employers/" + user.uid), {
                img: url,
                profileSetup: true,
                positionHeld: e.positionHeld,
                industry: e.industry,
                sector: e.sector,
                description: e.description,
                companyAddress: e.address,
                websiteUrl: e.website,
                // established: e.established,
                state: e.state,
                district: e.district,
                phoneHome: e.phoneHome,
                phoneMobile: e.phoneMobile,
                phoneOffice: e.phoneOffice,
                companySize: e.companySize,
                country: e.country,
              });
              setLoading(false);
              navigate("/employee-profile");
            })
            .catch((error) => {
              toast.error("Something went wrong!!! Try again");
              setLoading(false);
            });
        });
      }
    );
  };
  useEffect(() => {
    let config = {
      method: "get",
      url: "https://www.universal-tutorial.com/api/getaccesstoken",
      headers: {
        Accept: "application/json",
        "api-token": "KIAPsHsnPjoPFApP7VroRq2z_o3HGE9NmgFpQ3riHAPG5Z2uNLpHk618PoJUQQRbErw",
        "user-email": "topeakinfe+1@gmail.com",
      },
    };
    axios(config).then((response) => {
      setToken(response.data.auth_token);
      let config2 = {
        method: "get",
        url: "https://www.universal-tutorial.com/api/countries/",
        headers: {
          Authorization: `Bearer ${response.data.auth_token}`,
          Accept: "application/json",
        },
      };
      axios(config2)
        .then((response) => {
          setCountries(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);
  return (
    <div className="add-profile-container">
      <ToastContainer />
      <h2>Company Information</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="add-profile-logo">
          <div className="add-profile-text">
            <p>Company Logo</p>
            <img src={Logo} alt="profile" />
          </div>
          <div>
            <label>
              <input
                type="file"
                {...register("image", {
                  required: "Please pick Company Logo",
                })}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              Select Company Logo
            </label>
            <p className="add-profile-error">{errors?.image?.message}</p>
          </div>
        </div>
        <div className="add-profile-body">
          <div className="add-profile-double">
            <div className="add-profile-group">
              <label>Company Name</label>
              <input type="text" disabled value={user?.displayName} />
            </div>
            <div className="add-profile-group">
              <label>Position Held</label>
              <input
                type="text"
                {...register("positionHeld", {
                  required: "Please enter  position held",
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Only Alphabelts allowed",
                  },
                })}
              />
              <p className="add-profile-error">{errors?.positionHeld?.message}</p>
            </div>
          </div>
          <div className="add-profile-double">
            <div className="add-profile-group">
              <label>Industry</label>
              <input
                type="text"
                {...register("industry", {
                  required: "Please enter Industry",
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Only Alphabelts allowed",
                  },
                })}
              />
              <p className="add-profile-error">{errors?.industry?.message}</p>
            </div>
            <div className="add-profile-group">
              <label>Sector</label>
              <input
                type="text"
                {...register("sector", {
                  required: "Please enter Sector",
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Only Alphabelts allowed",
                  },
                })}
              />
              <p className="add-profile-error">{errors?.sector?.message}</p>
            </div>
          </div>
          <div className="add-profile-single">
            <label>Description</label>
            <textarea
              {...register("description", {
                required: "Please enter Description",
                // pattern: {
                //   value: /^[A-Za-z , .]+$/i,
                //   message: "Only Alphabelts allowed",
                // },
              })}></textarea>
            <p className="add-profile-error">{errors?.description?.message}</p>
          </div>
          <div className="add-profile-single">
            <label>Company Address</label>
            <input
              type="text"
              {...register("address", {
                required: "Please enter Address",
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: "Only Alphabelts allowed",
                },
              })}
            />
            <p className="add-profile-error">{errors?.address?.message}</p>
          </div>
          <div className="add-profile-double">
            <div className="add-profile-single">
              <label>Website URL</label>
              <input
                type="text"
                {...register("website", {
                  required: "Please enter Website URL",
                  //   pattern: {
                  //     value: /^[A-Za-z ]+$/i,
                  //     message: "Only Alphabelts allowed",
                  //   },
                })}
              />
              <p className="add-profile-error">{errors?.website?.message}</p>
            </div>
            {/* <div className="add-profile-group">
              <label>Established In</label>
              <input
                type="text"
                {...register("established", {
                  required: "Please enter Established Year",
                  pattern: {
                    value: /^[0-9 ]/i,
                    message: "Established must be a number",
                  },
                  minLength: {
                    value: 4,
                    message: "Min length is 4",
                  },
                  maxLength: {
                    value: 4,
                    message: "Max length is 4",
                  },
                })}
              />
              <p className="add-profile-error">{errors?.established?.message}</p>
            </div> */}
          </div>
          <div className="add-profile-double">
            <div className="add-profile-group">
              <label>Phone (Home)</label>
              <input
                type="text"
                {...register("phoneHome", {
                  required: "Please enter Phone (Home)",
                  pattern: {
                    value: /^[0-9 ]/i,
                    message: "Phone (Home) must be a number",
                  },
                  minLength: {
                    value: 11,
                    message: "Min length is 11",
                  },
                  maxLength: {
                    value: 11,
                    message: "Max length is 11",
                  },
                })}
              />

              <p className="add-profile-error">{errors?.phoneHome?.message}</p>
            </div>
            <div className="add-profile-group">
              <label>Phone (Mobile)</label>
              <input
                type="text"
                {...register("phoneMobile", {
                  required: "Please enter Phone (Mobile)",
                  pattern: {
                    value: /^[0-9 ]/i,
                    message: "Phone (Mobile) must be a number",
                  },
                  minLength: {
                    value: 11,
                    message: "Min length is 11",
                  },
                  maxLength: {
                    value: 11,
                    message: "Max length is 11",
                  },
                })}
              />
              <p className="add-profile-error">{errors?.phoneMobile?.message}</p>
            </div>
          </div>
          <div className="add-profile-double">
            <div className="add-profile-group">
              <label>Phone (Office)</label>
              <input
                type="text"
                {...register("phoneOffice", {
                  required: "Please enter Phone (Office)",
                  pattern: {
                    value: /^[0-9 ]/i,
                    message: "Phone (Office) must be a number",
                  },
                  minLength: {
                    value: 11,
                    message: "Min length is 11",
                  },
                  maxLength: {
                    value: 11,
                    message: "Max length is 11",
                  },
                })}
              />
              <p className="add-profile-error">{errors?.phoneOffice?.message}</p>
            </div>
            <div className="add-profile-group">
              <label>Email</label>
              <input type="email" disabled value={user?.email} />
            </div>
          </div>
          <div className="add-profile-double">
            <div className="add-profile-group">
              <label>Country</label>
              <select
                {...register("country", {
                  required: "Please choose Country",
                })}
                onChange={(e) => {
                  let config2 = {
                    method: "get",
                    url: `https://www.universal-tutorial.com/api/states/${e.target.value}`,
                    headers: {
                      Authorization: `Bearer ${token}`,
                      Accept: "application/json",
                    },
                  };
                  axios(config2)
                    .then((response) => {
                      setState(response.data);
                      // console.log(response.data);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}>
                <option value="">Country</option>
                {countries?.map((item, index) => {
                  return (
                    <option value={item.country_name} key={index}>
                      {item.country_name}
                    </option>
                  );
                })}
              </select>
              {/* <input
                type="text"
                {...register("country", {
                  required: "Please enter Country",
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Only Alphabelts allowed",
                  },
                })}
              /> */}
              <p className="add-profile-error">{errors?.country?.message}</p>
            </div>
            <div className="add-profile-group">
              <label>State/Province</label>
              <select
                {...register("state", {
                  required: "Please choose State/Province",
                })}
                onChange={(e) => {
                  let config2 = {
                    method: "get",
                    url: `https://www.universal-tutorial.com/api/cities/${e.target.value}`,
                    headers: {
                      Authorization: `Bearer ${token}`,
                      Accept: "application/json",
                    },
                  };
                  axios(config2)
                    .then((response) => {
                      setDistrict(response.data);
                      // console.log(response.data);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}>
                <option value="">State/Province</option>
                {state?.map((item, index) => {
                  return (
                    <option value={item.state_name} key={index}>
                      {item.state_name}
                    </option>
                  );
                })}
              </select>
              {/* <input
                type="text"
                {...register("state", {
                  required: "Please enter State/Province",
                  pattern: {
                    value: /^[A-Za-z ]+$/i,
                    message: "Only Alphabelts allowed",
                  },
                })}
              /> */}
              <p className="add-profile-error">{errors?.state?.message}</p>
            </div>
          </div>
          <div className="add-profile-double">
            <div className="add-profile-group">
              <label>District/City</label>
              <select
                {...register("district", {
                  required: "Please choose District/ City",
                })}>
                <option value="">Choose District</option>
                {district?.map((item, index) => {
                  return (
                    <option value={item.city_name} key={index}>
                      {item.city_name}
                    </option>
                  );
                })}
              </select>
              <p className="add-profile-error">{errors?.district?.message}</p>
            </div>

            <div className="add-profile-group">
              <label>Company Size</label>
              <select
                {...register("companySize", {
                  required: "Please choose Company Size",
                })}>
                <option value="">0-10</option>
                <option value="20-50">20-50</option>
              </select>
              <p className="add-profile-error">{errors?.companySize?.message}</p>
            </div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" className="add-profile-button">
            Update Profile and Save
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProfile;
