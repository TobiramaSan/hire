import React from "react";
import "./aboutUs.css";
// import Banner from "../../assets/CARTOON.png";
import Line from "../../svg-components/line/line";
import SmallCircle from "../../svg-components/small-circle/smallCircle";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-wrapper">
        {/* <div className="aboutus-banner">
          <div className="aboutus-banner-img">
            <img src={Banner} alt="banner" />
          </div>
          <div className="aboutus-banner-text">
            <h2>Stop wasting time</h2>
            <h3>in meetings</h3>
            <p>Boost efficiency, save time & money with post meeting surveys. </p>
            <div>
              <button>Get Started</button>
              <button>Sign up with Google</button>
            </div>
          </div>
        </div> */}
        <div className="about-us">
          <h2>About us</h2>
          <Line />
          <div className="about-us-cont">
            <div>
              <p>
                <span className="title">EXECUTIVE SUMMARY</span>
              </p>
              <p>
                Hireme.mu is under an inclusive ownership of <span className="title"> TARGETPLUS LTD </span> . It began out of the desire to contribute to this community of
                unemployment in Mauritius. Our main vision is to locate the right person for the right job and helping towards decreasing the unemployment rate in Mauritius.
              </p>
              <p>
                <span>TARGETME</span>
                targets specifically skilled workers with clients, saving businesses time and money, while providing for its employees with honesty and honor.
              </p>
              <p>This requires a high level of communication. It means asking open-ended questions and listening, not talking.</p>
              <p>
                This means knowing the local markets so <span className="title">TARGETME</span> can really serve each client and employee, not just "sell" them our Service.
              </p>
              <p>
                <span className="title">TARGETME</span> will be a qualitative service to both businesses and individuals of Mauritius.
              </p>
            </div>
            <div>
              <div className="aboutus-cont-head">
                <h2>VISION</h2>
                <Line />
              </div>
              <p>
                The long-term vision includes a number of offices throughout the country and other neighboring countries such as Rodrigues, Reunion Island, and other African
                countries. The proprietor sees the challenge in this vision, not in the growth itself, but in training and encouraging all TARGETME personnel to treat each client
                and employee with the same care and with the same level of communication and commitment. Our vision is to become the leading recruitment company in the African
                Region.
              </p>
            </div>
            <div>
              <div className="aboutus-cont-head">
                <h2>MISSION</h2>
                <Line />
              </div>
              <p>
                TARGETME mission is to contribute to the community by filling a need for specialized, professionals, contingent workers. The company will provide workers with a
                safe and independent environment. It will also provide businesses with a high-caliber of employee available for project or permanent work. TARGETME listens to
                individual needs and customizes personnel solutions for both businesses and Job Seekers
              </p>
            </div>
            <div className="about-us-points">
              <p> TARGETME for each customer:</p>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Recruiting (reference checking)</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Skills evaluation (preliminary interviewing)</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Screening.</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Appraisals.</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Follow up leads Innovate with time</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Practical approach to demands and supply on the job market</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Prioritise candidates and employers </p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Showing integrity, trust in our work</p>
              </div>
              <div>
                <span>
                  <SmallCircle />
                </span>
                <p>Improve the life of Jobseekers and Businesses</p>
              </div>
            </div>
            <div>
              <p>
                TARGETME acts as YOUR virtual Human Resource Department assuring that there is open communication between the employer and employee, and assisting with any
                troubleshooting or problem solving that may be needed. Through connections in a variety of areas, TARGETME is able to locate qualified workers not only through
                advertising, but through a channel of networking agencies. This past year has shown that qualified, willing workers are certainly available as we currently have
                qualified people willing and able to work.
              </p>
            </div>
            <div>
              <div className="aboutus-cont-head">
                <h2>CUSTOMERS NEEDS/PROBELMS</h2>
                <Line />
              </div>
              <p>
                Employment of Mauritians is estimated at 528,200 at the first quarter of 2016 compared to 529,100 at the first quarter of 2015 and 545,600 at the fourth quarter of
                2015. The number of unemployed persons stood at 43,500 at the first quarter 2016 compared to 50,300 at the first quarter of 2015 and 46,600 at the fourth quarter of
                2015. Unemployment rate for the year 2016 is projected at 7.7%. Mauritius is a developing country and its literacy rate is decreasing at an increasing rate.
                Therefore, with major development in the country including foreign direct investments from big economies such as France, India, UK, Germany, China, it is likely
                that the country will demand more and more human resources. Moreover, the impact of having a decrease in the literacy rate relates to more and more people trying to
                find a job at an increasing rate. On the other hand, companies due to fast moving economy, have to time to locate and recruit the right candidate for their company.
                This is where TARGETME comes into action by giving them the right candidate for the right job and also minimizing the company expenditures in the recruitment
                process or in losing time and money if they recruited the wrong candidate by themselves.
              </p>
              <p>
                Business clients will benefit the tailor-made advertising and recruitment done for them according to their specifications and requirements. This will help them in
                saving a lot of money and time in the recruitment process. They can either choose the candidates for the portal access given to them of can refer the process to the
                company. Job Seekers will be able to register themselves on the TARGETME job portal as job seekers and locate all advertised jobs through the company. The website
                will be tailor made as it will let the candidate be able to choose his own field of work which will make his job search easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
