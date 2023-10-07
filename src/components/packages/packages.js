import React from "react";
import "./packages.css";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const navigate = useNavigate();

  const direct = () => {
    navigate("/employee-packages");
  };
  return (
    <div className="packages-container">
      <h2>Upgrade Package</h2>
      <div className="packages-single-container">
        <div className="packages-single-wrapper basic">
          <h2>Basic</h2>
          <h3>
            USD <span>9.99</span>
          </h3>
          <p>Can post jobs : 10</p>
          <p>Package Duration : 30 Days</p>
          <button onClick={direct}>Buy Now</button>
        </div>
        <div className="packages-single-wrapper premium">
          <h2>Premium</h2>
          <h3>
            USD <span>19.99</span>
          </h3>
          <p>Can post jobs : 30</p>
          <p>Package Duration : 90 Days</p>
          <button onClick={direct}>Buy Now</button>
        </div>
        <div className="packages-single-wrapper basic">
          <h2>Free package</h2>
          <h3>
            USD <span>0.00</span>
          </h3>
          <p>Can post jobs : 5</p>
          <p>Package Duration : 10 Days</p>
          <button onClick={direct}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
