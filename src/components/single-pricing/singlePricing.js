import React from "react";
import "./singlePricing.css";
import { useNavigate } from "react-router-dom";
import { formatter } from "../../utils/formatter/formatter";

const SinglePricing = ({ number, amount, plan }) => {
  const navigate = useNavigate();
  return (
    <div className="single-pricing-container">
      <p>{number} Job Posting</p>
      <h2>{formatter.format(amount)}</h2>
      <button
        onClick={() => {
          navigate(`/employee-payment?number=${number}&amount=${amount}&plan=${plan}`);
        }}>
        Choose Plan
      </button>
    </div>
  );
};

export default SinglePricing;
