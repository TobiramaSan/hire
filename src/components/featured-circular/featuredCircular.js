import React from "react";
import "./featuredCircular.css";
import { circulars } from "../../utils/data/data";
import SingleCircular from "../single-circular/singleCircular";

const FeaturedCircular = () => {
  return (
    <div className="featured-circular-cont">
      <div className="featured-circular-container">
        <h2>Featured Job Circulars</h2>
        <div className="featured-circular-wrapper">
          {circulars?.map((item, index) => {
            return (
              <div className="featured-circular-single" key={index}>
                <SingleCircular
                  amount={item.amount}
                  company={item.company}
                  description={item.description}
                  img={item.img}
                  time={item.time}
                  type={item.type}
                  position={item.position}
                />
              </div>
            );
          })}
        </div>
        <div className="featured-circular-wrapper">
          {circulars?.map((item, index) => {
            return (
              <div className="featured-circular-single" key={index}>
                <SingleCircular
                  amount={item.amount}
                  company={item.company}
                  description={item.description}
                  img={item.img}
                  time={item.time}
                  type={item.type}
                  position={item.position}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCircular;
