import React, { useState } from "react";
import "./pricingPlan.css";
// import Popular from "../../assets/popular.svg";
import SinglePricing from "../single-pricing/singlePricing";

const PricingPlan = () => {
  const [plan, setPlan] = useState("1 Month with CV access");
  return (
    <div className="pricing-plan-container">
      <h2>Price Packages</h2>
      <div className="pricing-plan-wrapper">
        <div className="pricing-plan-body">
          <div className="pricing-plan-head">
            <h2
              onClick={() => {
                setPlan("1 Month with CV access");
              }}
              className={plan === "1 Month with CV access" ? "active" : ""}>
              1 Month with CV access
            </h2>
            <h2
              onClick={() => {
                setPlan("1 Month with No CV access");
              }}
              className={plan === "1 Month with No CV access" ? "active" : ""}>
              1 Month with No CV access
            </h2>
            <h2
              onClick={() => {
                setPlan("1 Year with CV access");
              }}
              className={plan === "1 Year with CV access" ? "active" : ""}>
              1 Year with CV access
            </h2>
            <h2
              onClick={() => {
                setPlan("1 Year with No CV access");
              }}
              className={plan === "1 Year with No CV access" ? "active" : ""}>
              1 Year with No CV access
            </h2>
          </div>
          {plan === "1 Year with No CV access" ? (
            <>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={5} amount={25000} />
                <SinglePricing plan={plan} number={6} amount={30000} />
                <SinglePricing plan={plan} number={7} amount={35000} />
              </div>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={8} amount={40000} />
                <SinglePricing plan={plan} number={9} amount={45000} />
                <SinglePricing plan={plan} number={10} amount={50000} />
              </div>
            </>
          ) : plan === "1 Year with CV access" ? (
            <>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={5} amount={40000} />
                <SinglePricing plan={plan} number={6} amount={48000} />
                <SinglePricing plan={plan} number={7} amount={56000} />
              </div>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={8} amount={64000} />
                <SinglePricing plan={plan} number={9} amount={72000} />
                <SinglePricing plan={plan} number={10} amount={80000} />
              </div>
            </>
          ) : plan === "1 Month with CV access" ? (
            <>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={1} amount={9000} />
                <SinglePricing plan={plan} number={2} amount={18000} />
                <SinglePricing plan={plan} number={3} amount={27000} />
              </div>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={4} amount={36000} />
                <SinglePricing plan={plan} number={5} amount={45000} />
                <SinglePricing plan={plan} number={6} amount={54000} />
              </div>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={7} amount={60000} />
                <SinglePricing plan={plan} number={8} amount={72000} />
                <SinglePricing plan={plan} number={9} amount={81000} />
              </div>
            </>
          ) : plan === "1 Month with No CV access" ? (
            <>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={1} amount={6000} />
                <SinglePricing plan={plan} number={2} amount={12000} />
                <SinglePricing plan={plan} number={3} amount={18000} />
              </div>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={4} amount={24000} />
                <SinglePricing plan={plan} number={5} amount={30000} />
                <SinglePricing plan={plan} number={6} amount={36000} />
              </div>
              <div className="pricing-plan-cont">
                <SinglePricing plan={plan} number={7} amount={42000} />
                <SinglePricing plan={plan} number={8} amount={48000} />
                <SinglePricing plan={plan} number={9} amount={54000} />
              </div>
            </>
          ) : null}
        </div>
        {/* <div className="pricing-plan-body">
          <h2>1 Month with No CV access</h2>
        </div>
        <div className="pricing-plan-body">
          <h2>1 Year with CV access</h2>
        </div>
        <div className="pricing-plan-body">
          <h2>1 Year with No CV access</h2>
        </div> */}
      </div>
      {/* <div className="pricing-plan-table">
        <div className="pricing-table-head">
          <div>
            <p>Number of Jobs</p>
          </div>
          <div>
            <p>1 Month with CV access</p>
          </div>
          <div>
            <p>1 month with NO CV Access</p>
          </div>
          <div>
            <img src={Popular} alt="popular" />
            <p>1 year with CV Access</p>
          </div>
          <div>
            <p>1 year with NO CV Access</p>
          </div>
          <div>
            <p>Hire Me in House Selection</p>
          </div>
        </div>
        <div className="pricing-table-body">
          <div className="pricing-table-single">
            <div>
              <p>1</p>
            </div>
            <div>
              <p>9000</p>
            </div>
            <div className="onions">
              <p>6000</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div className="red">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>2</p>
            </div>
            <div>
              <p>18000</p>
            </div>
            <div>
              <p>12000</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>3</p>
            </div>
            <div>
              <p>27000</p>
            </div>
            <div>
              <p>18000</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>4</p>
            </div>
            <div>
              <p>36000</p>
            </div>
            <div>
              <p>24000</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div>
              <p>N/A</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>5</p>
            </div>
            <div>
              <p>45000</p>
            </div>
            <div>
              <p>30000</p>
            </div>
            <div className="orange">
              <p>RS 40,000</p>
            </div>
            <div className="yellow">
              <p>RS 25,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>6</p>
            </div>
            <div>
              <p>54000</p>
            </div>
            <div>
              <p>36000</p>
            </div>
            <div>
              <p>48,000</p>
            </div>
            <div>
              <p>30,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>7</p>
            </div>
            <div>
              <p>63000</p>
            </div>
            <div>
              <p>42000</p>
            </div>
            <div>
              <p>56,000</p>
            </div>
            <div>
              <p>35,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>8</p>
            </div>
            <div>
              <p>72000</p>
            </div>
            <div>
              <p>48000</p>
            </div>
            <div>
              <p>64,000</p>
            </div>
            <div>
              <p>40,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>9</p>
            </div>
            <div>
              <p>81000</p>
            </div>
            <div>
              <p>54000</p>
            </div>
            <div>
              <p>72,000</p>
            </div>
            <div>
              <p>45,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
          <div className="pricing-table-single">
            <div>
              <p>10</p>
            </div>
            <div>
              <p>90000</p>
            </div>
            <div>
              <p>60000</p>
            </div>
            <div className="orange">
              <p>Rs 80,000</p>
            </div>
            <div className="yellow">
              <p>Rs 50,000</p>
            </div>
            <div className="black">
              <p>1 Month Salary</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PricingPlan;
