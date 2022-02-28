import Footer from "../../Footer";
import Waranty from "../waranty";
import "./Mouse.css";

import Slide from "react-reveal/Slide";
function Mouse() {
  return (
    <div className="mouse">
      <div className="first-banner-mouse">
        <div className="img-holder">
          <img src="deathadder4.png" alt="" />
        </div>

        <div className="h2-holder">
          <Slide bottom>
            <h1>ERGONOMICS WITHOUT EQUAL</h1>
            <p>
              Witness an icon reborn with the Razer Deathadder v2 - an ergonomic
              mouse designed with deadly curves and killer lines for a weapon
              that handles like no other. With the next-gen sensor and switches
              packed into a lighter form factor.
            </p>
          </Slide>
        </div>
      </div>
      <Slide right>
        <div className="optical">
          <img src="optical.png" alt="" />

          <div className="description-optical">
            <h1>
              RAZER™ OPTICAL<br></br>MOUSE SWITCH
            </h1>
            <p>
              Utilizing an infrared light beam to register every click, the
              switches in this ergonomic mouse actuate with an industry-leading
              response time of 0.2 milliseconds. Because it no longer requires
              traditional physical contact, this form of actuation removes the
              need for debounce delay and never triggers unintended clicks,
              giving you closer control and flawless execution.
            </p>
          </div>
        </div>
      </Slide>
      <iframe
        width="100%"
        height="415"
        src="https://www.youtube.com/embed/VpCrAJHyvMI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Waranty />

      <Footer />
    </div>
  );
}
export default Mouse;
