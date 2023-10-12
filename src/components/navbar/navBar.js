import React from "react";
import "./navBar.css";
// import Man from "../../assets/Link → member4.jpg.png";
import dashboard from "../../assets/dashboard.png";
import profile from "../../assets/profile.png";
import applications from "../../assets/job-applications.png";
import alerts from "../../assets/job-alerts.png";
import settings from "../../assets/Settings.png";
import messages from "../../assets/my-messages.png";
import logout from "../../assets/Logout.png";
// import man from "../../assets/man.png";

const NavBar = () => {
  const candidateData = [
    {
      name: "Candidate",
      state: "New York",
      img: "images/man.png",
    },
  ];
  return (
    <div className="navbar">
      {candidateData.map((item) => (
        <div className="candidate-blk">
          <div className="candidate-picture">
            <div className="pic">
              <img alt="" src={item.img} />
            </div>
          </div>
          <div className="candidate-info">
            <h1>{item.name}</h1>
            <p>{item.state}</p>
            <button>View Profile</button>
          </div>
        </div>
      ))}

      <div className="navlinks">
        <div className="link">
          <img src={dashboard} alt="" />
          <p>Dashboard</p>
        </div>
        <div className="link">
          <img src={profile} alt="" />
          <p>Profile</p>
        </div>
        <div className="link">
          <img src={applications} alt="" />
          <p>My Job Applications</p>
        </div>
        <div className="link">
          <img src={alerts} alt="" />
          <p>My Job Alerts</p>
        </div>
        <div className="link">
          <img src={settings} alt="" />
          <p>Settings</p>
        </div>
        <div className="link">
          <img src={messages} alt="" />
          <p>My Messages</p>
        </div>
        <div className="link">
          <img src={logout} alt="" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
