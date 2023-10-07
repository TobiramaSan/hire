import React from "react";
import "./navBar.css";
import Man from "../../assets/Link → member4.jpg.png";

const NavBar = () => {
  const candidateData = [
    {
      name: "Candidate",
      state: "New York",
      img: "Man",
    },
  ];
  return (
    <div className="navbar">
      {candidateData.map((item) => (
        <div className="candidate-blk">
          <div className="candidate-picture">
            <div className="pic">{item.img}</div>
          </div>
          <div className="candidate-info"></div>
        </div>
      ))}

      <div className="links"></div>
    </div>
  );
};

export default NavBar;
