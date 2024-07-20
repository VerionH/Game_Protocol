import React from "react";
import "./Section3.css";

export const Section3 = () => {
  return (
    <div className="wrapper-section3">
      <video autoPlay muted loop playsInline className="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/assets/main_video.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="content">
        <div className="top">
          <div className="item1">
            <span className="font2 title-line1">Play Fair, Play Secure</span>
            <br />
            <span className="font1 title-line2">with Quantum Power</span>
          </div>
        </div>
        <div className="bottom">
          <div className="email-wrapper">
            <span className="font1">Email</span>
            <br />
            <br />
            <span className="font3">team@gameprotocol.xyz</span>
          </div>
          <div className="bottom-logo-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/assets/main_logo.png`}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
