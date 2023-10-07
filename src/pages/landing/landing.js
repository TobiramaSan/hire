import React, { useEffect } from "react";
import "./landing.css";
import Welcome from "../../components/welcome/welcome";

const Landing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return <Welcome />;
};

export default Landing;
