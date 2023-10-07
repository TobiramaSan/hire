import React from "react";
import "./works.css";
import Line from "../../svg-components/line/line";
import WorksSingle from "../works-single/worksSingle";
import Google from "../../assets/google.svg";
import Customization from "../../assets/customization.svg";
import Automation from "../../assets/auto.svg";

const Works = () => {
  return (
    <div className="works-container">
      <h2>How it works?</h2>
      <div className="works-line">
        <Line />
      </div>
      <div className="works-wrapper">
        <WorksSingle
          img={Google}
          title="Click Google integration"
          text="Simply log into your google account,
then seamlessly integrate and
mirror your planned meetings."
        />
        <WorksSingle
          img={Customization}
          title="Customization"
          text="Whatever the goals of your team or organization,
create a survey to better help you
understand the minds of those involved. "
        />
        <WorksSingle
          img={Automation}
          title="Automation"
          text="Automatically triggered emails
obtain survey feedback. Wait for meeting data
to be cleanly organized in your dashboard."
        />
      </div>
    </div>
  );
};

export default Works;
