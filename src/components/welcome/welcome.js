import React from "react";
import "./welcome.css";
// import Type from "../../assets/jobs-types.png";
import Layout from "../../utils/layout/layout";
import Recruit from "../../assets/recruiting.png";
import Jobs from "../../assets/job.svg";
import Companies from "../../assets/companies.svg";
import Candidates from "../../assets/candidates.svg";
import Search from "../../assets/search-icon.svg";
import FeaturedCircular from "../featured-circular/featuredCircular";
import Header from "../header/header";
import ManySolution from "../many-solution/manySolution";
import Footer from "../footer/footer";
import Subscribe from "../subscribe/subscribe";
import Animation from "../animation/animation";
import { industries } from "../../utils/data/data";

const Welcome = () => {
  return (
    <>
      <Layout>
        <Header />
        <div className="welcome-container">
          <div className="welcome-banner">
            <div className="welcome-place">
              <h2>You apply we place</h2>
              <span>
                <Animation text="Helping you find your dreams." delay={100} />
              </span>
            </div>
            <div className="welcome-advert">
              <div className="welcome-advert-text">
                <div className="welcome-advert-search">
                  <div className="welcome-advert-input">
                    <input type="text" placeholder="Enter Skills or job title" />
                  </div>
                  <div className="welcome-advert-select">
                    <select name="" id="">
                      <option value="">Select Functional Area</option>
                    </select>
                  </div>
                  <div className="welcome-advert-button">
                    <img src={Search} alt="search" />
                  </div>
                </div>
                <div className="welcome-advert-popular">
                  <h2>Popular Industries</h2>
                  <div className="welcome-advert-industries">
                    {industries?.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </div>
                </div>
                <div className="welcome-advert-number">
                  <div className="welcome-advert-single">
                    <div className="welcome-advert-circle">
                      <img src={Jobs} alt="Jobs" />
                    </div>
                    <div>
                      <h2>19</h2>
                      <p>Active Jobs</p>
                    </div>
                  </div>
                  <div className="welcome-advert-single">
                    <div className="welcome-advert-circle">
                      <img src={Companies} alt="Companies" />
                    </div>
                    <div>
                      <h2>15</h2>
                      <p>Active Companies</p>
                    </div>
                  </div>
                  <div className="welcome-advert-single">
                    <div className="welcome-advert-circle">
                      <img src={Candidates} alt="Candidates" />
                    </div>
                    <div>
                      <h2>5</h2>
                      <p>Candidates</p>
                    </div>
                  </div>
                </div>
              </div>
              <img src={Recruit} alt="recruit" />
            </div>
          </div>
          <ManySolution />
          {/* <MoreJobs /> */}
          {/* <div className="welcome-type">
            <img src={Type} alt="type" />
          </div> */}
          <FeaturedCircular />
          {/* <Profilling /> */}
        </div>
      </Layout>
      <Subscribe />
      {/* <div className="welcome-footer">
        <h2>CopyRight Hireme.mu</h2>
      </div> */}
      <Footer />
    </>
  );
};

export default Welcome;
