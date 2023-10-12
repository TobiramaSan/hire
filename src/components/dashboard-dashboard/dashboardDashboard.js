import React from "react";
import "./dashboardDashboard.css";
import noimage from "../../assets/no-image-info.png";
import tele from "../../assets/tele.png";
import location from "../../assets/location.png";
import messages from "../../assets/message-icon.png";
import edit from "../../assets/edit-icon.png";

const DashboardDashboard = () => {
  const candidateData = [
    {
      name: "Sharjeel Anjum",
      address: " Auburn, Washington, United States of America",
      phoneno: "+1234567890",
      email: " seeker@jobsportal.com",
    },
  ];

  const infoAcct = [
    {
      img: "images/views.png",
      number: "109",
      section: "Public Views",
    },
    {
      img: "images/followings.png",
      number: "1",
      section: "Followings",
    },
    {
      img: "images/cv.png",
      number: "2",
      section: "My CV List",
    },
    {
      img: "images/messages.png",
      number: "1",
      section: "Messages",
    },
  ];

  const jobData = [
    {
      img: "images/job.png",
      jobType: "Recommended Jobs",
      jobTitle: "Frontend Developer",
      space: "Sphere",
    },
    {
      img: "images/job.png",
      jobType: "Recommended Jobs",
      jobTitle: "Safety Officer",
      space: "Oval Interprise",
    },
  ];

  const followingData = [
    {
      img: "images/follow.png",
      title: " My Followings",
      place: "New Design Studio",
      address: "Atlantic City, NJ USA",
    },
  ];
  return (
    <div className="candidate-dashboard">
      {candidateData.map((item) => (
        <div className="header-info">
          <div className="info-pic">
            <img className="info-image" src={noimage} alt="" />
          </div>
          <div className="info">
            <h1>{item.name}</h1>
            <div className="flx">
              <img src={location} alt="" />
              <p>{item.address}</p>
            </div>
            <div className="flx">
              <img src={tele} alt="" />
              <span>{item.phoneno}</span>
            </div>
          </div>

          <div className="btn-email">
            <button className="edit-profile">
              <img src={edit} alt="" />
              Edit Profile
            </button>
            <div className="flx">
              <img src={messages} alt="" /> <p>{item.email}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="acct-info">
        {infoAcct.map((item, id) => (
          <div className="info-cont" key={id}>
            <img src={item?.img} alt="" />
            <h1>{item?.number}</h1>
            <p>{item?.section}</p>
          </div>
        ))}
      </div>
      <div className="job-follow">
        <div className="jobs">
          {jobData.map((item, id) => (
            <div className="job" key={id}>
              <div className="flx">
                <img src={item?.img} alt="" /> <p>{item?.jobType}</p>
              </div>
              <h1>{item?.jobTitle}</h1>
              <span>{item?.space}</span>
            </div>
          ))}
        </div>
        {followingData.map((item, id) => (
          <div className="follow">
            <div className="flx">
              <img src={item?.img} alt="" /> <p>{item?.title}</p>
            </div>
            <div className="details">
              <h1>{item?.place}</h1>
              <p>{item?.address}</p>
              <span>View Details</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardDashboard;
