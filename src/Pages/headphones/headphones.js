import Footer from "../../Footer";
import Waranty from "../waranty";
import "./headphones.css";
import Slide from "react-reveal/Slide";

function Headphones() {
  return (
    <div className="headphones">
      <div className="crossplatform">
        <img src="cross.png" alt="" />
      </div>

      <div className="scout">
        <img src="scoutbanner.png" alt="" />
        <Slide left>
          <h1>
            "IT LOOKS AND FEELS AS GOOD AS IT SOUNDS" <br />
            <span>- SCOUT</span>
          </h1>
        </Slide>
      </div>

      <div className="karrigan">
        <img src="karriganbanner.png" alt="" />
        <Slide right>
          <h1>
            "INSANELY COMFORTABLE AND LIGHT, WITH GREAT NOISE CANELLATION."{" "}
            <br />
            <span>- KARRIGAN</span>
          </h1>
        </Slide>
      </div>

      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/YPfTlyVHZmA"
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
export default Headphones;
