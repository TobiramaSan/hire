import React, { useMemo, useState } from "react";
import "./payment.css";
import Rafiki from "../../assets/payment-rafiki.png";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../../utils/firebase/firebase-config";
import { useLocation } from "react-router-dom";
import Info from "../../svg-components/info";

const Payment = () => {
  // const [check, setCheck] = useState("Hire Me Services");
  const [payment, setPayment] = useState(false);
  const user = auth.currentUser;
  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();

  const number = query.get("number");
  const amount = query.get("amount");
  const plan = query.get("plan");
  return (
    <div className="payment-container">
      <ToastContainer />
      <div className="payment-wrapper">
        <img src={Rafiki} alt="rafiki" />
        <div className="payment-details">
          <div className="payment-details-head">
            <img src={user?.photoURL} alt="user" />
            <div>
              <h2>{user?.displayName}</h2>
              <p>Details</p>
            </div>
          </div>
          <div className="payment-details-body">
            <div className="payment-details-single">
              <p>Plan</p>
              <p>{plan}</p>
            </div>
            <div className="payment-details-single">
              <p>Number </p>
              <p>{number}</p>
            </div>
            <div className="payment-details-single">
              <h2>Summary</h2>
              <h2>{amount}</h2>
            </div>
          </div>
          <div className="payment-details-button">
            <button
              onClick={() => {
                toast.error("We are not paying online for the moment, kindly pay offline!!");
              }}>
              PROCEED TO PAY
            </button>
            <button
              onClick={() => {
                setPayment(!payment);
              }}>
              PAY OFFLINE
            </button>
          </div>
          {payment ? (
            <div className="offline-payment">
              <div className="offline-payment-head">
                <Info />
                <h2>Offline Payment</h2>
              </div>
              <div className="offline-payment-body">
                <div className="offline-payment-single">
                  <p>Bank</p>
                  <h2>Citi Bank</h2>
                </div>
                <div className="offline-payment-single">
                  <p>Bank Account Number</p>
                  <h2>350586084959</h2>
                </div>
                <div className="offline-payment-single">
                  <p>Recipient's Name</p>
                  <h2>Folarin Bankole</h2>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Payment;
