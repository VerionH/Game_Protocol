import React from "react";
import "./Section1.css";

export const Section1 = () => {
  return (
    <div className="wrapper">
      <video autoPlay muted loop playsInline className="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/assets/main_video.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="content">
        <div className="image-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/assets/main_logo.png`}
            className="main-logo"
          />
        </div>
        <div className="text-wrapper">
          <div className="item1"></div>
          <div className="item2">
            <span className="font2 title-line1">Game</span>
            <span className="font2 title-line2">Protocol</span>
            <span className="font1 title-description">
              Discover the ultimate Gaming Blockchain
            </span>
          </div>
          <div className="item3"></div>
        </div>
      </div>
    </div>
  );
};
