import React from "react";
import Footer from "../../Footer";
import CheckOut from "../CheckoutPage/Checkout";
import "./KeyBoard.css";
import Slide from "react-reveal/Slide";

const KeyBoard = (props) => {
  const { isUserLoggedIn } = props;
  return (
    <div className="keyboard">
      <div className="km-image">
        <img src="km.jpg" alt="" />
        <Slide left>
          <h2>G.Skill KM360</h2>
        </Slide>
        <Slide right>
          <p>
            Our most compact mechanical keyboard with a 65% form factor,
            designed for seamless wireless gaming in any space.
          </p>
        </Slide>
      </div>
      <div className="banner-one">
        <img src="gskill.png" alt="" />

        <div className="banner-description">
          <Slide left>
            <h1>
              PROFESSIONAL TENKEYLESS <br /> MECHANICAL KEYBOARD
            </h1>

            <p>
              Featuring long-lasting Cherry MX mechanical keyswitches,wear-proof
              ABS double injection keycaps, and a solid aluminum top-plate,the
              KM360 mechanical keyboard is the perfect daily mechanical
              keyboard. With a detachable USB Type-C cable.
            </p>
          </Slide>
        </div>
      </div>

      <div className="green-banner">
        <Slide bottom>
          <h1>ERGONOMIC KEYCAP DESIGN</h1>
          <p>
            Each keycap is designed with a different lift and angle to let your
            fingers type comfortably and naturally. With a detachable USB Type-C
            cable, the KM360 keyboard can easily fit into backpacks for
            ultra-portability - giving you the option to comfortably type on a
            mechanical keyboard wherever you go.
          </p>
        </Slide>
      </div>
      <div className="banner-two">
        <img src="gskill2.png" alt="" />
        <div className="banner-description-two">
          <Slide right>
            <h1>
              COMPACT TENKEYLESS <br /> (TKL) DESIGN
            </h1>
            <p>
              With a smaller keyboard footprint,you'll get more desktop space
              for more mouse movement freedom, letting you game and work with
              more comfort and less clutter.
            </p>
          </Slide>
        </div>
      </div>
      <iframe
        className="yt"
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/yGFZK6Ru28o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <Footer />
    </div>
  );
};

export default KeyBoard;
