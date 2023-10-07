import React, { useEffect } from "react";
import "./about.css";
// import Layout from "../../utils/layout/layout";
import Header from "../../components/header/header";
import AboutUs from "../../components/about-us/aboutUs";
// import ContactForm from "../../components/contact-form/contactForm";
// import Works from "../../components/works/works";
import First from "../../components/first/first";
import Profilling from "../../components/profilling/profilling";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      <AboutUs />
      {/* <ContactForm />
      <Works /> */}
      <First />
      <div className="about-profilling">
        <Profilling />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default About;
