import Footer from "../../Footer";
import "./monitor.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

import Slide from "react-reveal/Slide";

function MonitorPage() {
  const FIRST_IMAGE = {
    imageUrl: "first.webp",
  };
  const SECOND_IMAGE = {
    imageUrl: "second.jpg",
  };
  return (
    <div className="monitor">
      <div className="ultragear-img">
        <img src="ultragearcurved.jpg" alt="" />
      </div>
      <div className="monitor-first-banner">
        <Slide bottom>
          <h3>ULTRA GEAR CURVED</h3>

          <h1>PIXEL PERFECT</h1>
        </Slide>
        <Slide right>
          <p>
            Updated with the capability and clarity you need to game at your
            best, the new LG UltraGear is now faster than ever with up to 165Hz
            refresh rate and new THX® Certified visual clarity. The perfect
            combination of style and performance, the latest Raptor still sports
            an IPS panel with QHD (2560 x 1440px) resolution and is built upon
            the previous sleek cable management stand, giving you a streamlined
            visual experience both on screen and on your desk.
          </p>
        </Slide>
      </div>
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/QJSkd4kk8mI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="monitor-second-banner">
        <Slide bottom>
          <h1>165HZ HIGH SPEED. QHD HIGH RESOLUTION.</h1>
        </Slide>
        <Slide left>
          <p>
            Offering up to 165Hz in QHD resolution, the new LG UltraGear gives
            you more frames to push your competitive advantage. Combined with a
            1ms response time, thanks to Ultra Low Motion Blur technology, you
            will have an unmatched gaming experience with sharper images and
            extraordinarily smooth frame rates.
          </p>
        </Slide>
      </div>
      <div className="ultragear-img-two">
        <img src="lgultra.jpg" alt="" />
      </div>
      <ReactBeforeSliderComponent
        firstImage={FIRST_IMAGE}
        secondImage={SECOND_IMAGE}
      />
      <Footer />
    </div>
  );
}
export default MonitorPage;
