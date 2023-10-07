import React from "react";
import "./advertise.css";
import Header from "../../components/header/header";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";
import ContactForm from "../../components/contact-form/contactForm";
import AdvertiseUs from "../../components/advertise-us/advertiseUs";

const Advertise = () => {
  return (
    <>
      <Header />
      <AdvertiseUs />
      <ContactForm />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Advertise;
