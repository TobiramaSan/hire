import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-form-time">
        <h2>
          We all know that time is money... <br /> so stop wasting time, and save money with Rate It!
        </h2>
      </div>
      <div className="contact-form-form">
        <form>
          <div className="form-group">
            <div className="form-cont">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="form-cont">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-cont">
              <label>Mail</label>
              <input type="email" />
            </div>
            <div className="form-cont">
              <label>Phone</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-single">
            <div className="form-cont">
              <label>Message</label>
              <textarea placeholder="Write your message"></textarea>
            </div>
          </div>
          <div className="form-button">
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
