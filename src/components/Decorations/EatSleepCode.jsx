import React from "react";
import "./EatSleepCodeStyle.css";
import star from "../../assets/star.png";

const EatSleepCode = () => {
  return (
    <div>
      <div className="box-gradient" />

      <div className="cok">
        <div className="eat-sleep-code">
          <h4 className="text-black-secondary">Eat</h4>
          <img src={star} className="star" alt="star" />
          <h4 className="text-black-secondary">Sleep</h4>
          <img src={star} className="star" alt="star" />
          <h4 className="text-black-secondary">Code</h4>
          <img src={star} className="star" alt="star" />
          <h4 className="text-black-secondary">Repeat</h4>
          <img src={star} className="star" alt="star" />
          <h4 className="text-black-secondary">Eat</h4>
          <img src={star} className="star" alt="star" />
          <h4 className="text-black-secondary">Sleep</h4>
          <img src={star} className="star" alt="star" />
          <h4 className="text-black-secondary">Code</h4>
          <img src={star} className="star" alt="star" />
          <h4 className="text-black-secondary">Repeat</h4>
          <img src={star} className="star" alt="star" />
        </div>
      </div>
    </div>
  );
};

export default EatSleepCode;
