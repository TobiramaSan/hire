import React from "react";
import "./singleAdvert.css";

const SingleAdvert = ({ position }) => {
  return (
    <div className="single-advert-container">
      <div className="single-advert-position">
        <p>{position}</p>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SingleAdvert;
