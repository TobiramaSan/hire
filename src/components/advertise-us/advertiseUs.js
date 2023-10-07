import React from "react";
import "./advertiseUs.css";
import Up from "../../assets/up.png";
import Down from "../../assets/down.png";

const AdvertiseUs = () => {
  return (
    <div className="advertise-us-container">
      <div className="advertise-first">
        <div className="advertise-first-text">
          <h2>Connect your store and sell</h2>
          <p>Easily connect your shopify store</p>
        </div>
        <img src={Down} alt="up" />
      </div>
      <div className="advertise-cont">
        <div className="advertise-first">
          <div className="advertise-first-text">
            <h2>Create your Product</h2>
            <p>Use our mockup generator</p>
          </div>
          <img src={Up} alt="up" />
        </div>
        <div className="advertise-first">
          <div className="advertise-first-text">
            <h2>We handle fulfillment</h2>
            <p>Once an order is placed, we print, pack and deliver</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseUs;
