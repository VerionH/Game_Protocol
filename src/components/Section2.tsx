import React from "react";
import "./Section2.css";

export const Section2 = () => {
  return (
    <div className="wrapper-section2">
      <div className="content1">
        <img src={`${process.env.PUBLIC_URL}/assets/second_gif.gif`} />
        <div className="text-wrapper">
          <p>
            <span className="font1">ABOUT</span>
            <br />
            <span className="font1">GAME PROTOCOL</span>
          </p>
          <p>
            <span className="font3 small">
              GameProtocol is a blockchain for gaming, utilizing ​Verifiable
              Random Functions (VRF) with quantum random ​number to ensure
              tamper-proof randomness in games, ​crucial for scenarios like
              online casinos.
            </span>
            <br /> <br /> <br />
            <span className="font3 small">
              It also features a fast and reliable oracle to integrate
              ​real-time external data into games, enhancing ​interactivity and
              diversity. This technology makes more ​transparent gaming
              environment.
            </span>
          </p>
        </div>
      </div>
      <div className="content2">
        <div className="why-title">
          <span className="font1 title" style={{ textAlign: "center" }}>
            WHY GAME PROTOCOL?
          </span>
        </div>
        <div className="why-wrapper">
          <div className="item-wrapper">
            <span className="font4">True Random Number</span>
            <br />
            <span className="font3 small">
              Did you know that current ​Random Number Generators ​(RNGs) don't
              produce truly ​random numbers?
            </span>
            <br />
            <br />
            <span className="font3 small">
              We're revolutionizing RNG ​technology by harnessing ​quantum
              technologies to ​generate True Random ​Numbers for gaming.
            </span>
            <br />
            <br />
            <span className="font3 small">
              This innovation ensures ​absolute randomness, ​crucial for
              fairness and ​unpredictability in games.
            </span>
          </div>
          <div className="item-wrapper">
            <span className="font4">Fast Oracle for Gaming</span>
            <br />
            <span className="font3 small">
              Many games require ​external data to enhance ​the gaming
              experience, and ​it's crucial that this data is ​delivered
              quickly.
            </span>
            <br />
            <br />
            <span className="font3 small">
              Our Fast Oracle service is ​designed to meet this need, ​ensuring
              that external data ​is integrated seamlessly ​and speedily into
              games, ​maintaining real-time ​interactivity and immersion.
            </span>
          </div>
          <div className="item-wrapper">
            <span className="font4">Trust of Fairness</span>
            <br />
            <span className="font3 small">
              Data manipulation, both from ​internal and external ​sources, can
              undermine ​trust in gaming.
            </span>
            <br />
            <br />
            <span className="font3 small">
              To establish and maintain ​gamer trust, it is essential ​that all
              data be verifiable.
            </span>
            <br />
            <br />
            <span className="font3 small">
              This ensures fairness and ​transparency, allowing ​players to
              fully trust the ​integrity of the game.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
