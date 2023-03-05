import React from "react";
import { TrialButton } from "../../Utilities/Buttons/TrialButton/TrialButton";
import Bottons from "./Bottons";

const Section = () => {
  return (
    <>
      <div className="container">
        <div className="container-title">
          <h1>Hello! 👋 Welcome to the Immerse blog</h1>
        </div>
      </div>

      <div className="container">
        <div className="glowing-line-component">
          <div className="glow"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="container">
        <div className="card2">
          <div className="imageshadow2">
            <img src="https://assets.website-files.com/62b46e994f1dca4537e494a5/630d0cd9894c6a5e505d4365_Frame%202226%20(2)-p-1600.png" />
          </div>
          <div className="divText2">
            <div className="text-wrapper">
              <h2 className="title2">
                How to Overcome Your Fear of Speaking Spanish
              </h2>
              <div className="subtitle2">
                <div className="research2">Learning</div>
                <div className="data2">august 31, 2022</div>
              </div>
            </div>

            <div className="btn">
              <TrialButton text="Start Reading" />
            </div>
          </div>
        </div>
      </div>

      <Bottons />
    </>
  );
};

export default Section;
