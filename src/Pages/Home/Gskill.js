import "./Gskill.css";

import Fade from "react-reveal/Fade";
function Gskill() {
  return (
    <div className="g-skill-banner">
      <div className="g-skill-banner-left">
        <h1>G.Skill</h1>
        <Fade left>
          <div className="white-keyboard-img">
            <img
              src="https://www.gskill.com/_upload/images/1904031637530.png"
              alt=""
            />
          </div>
        </Fade>
        <div className="description">
          <h2>Ergonomic Contoured Keycap Design</h2>
          <p>
            Each keycap row is designed with a different lift and angle to let
            your fingers type comfortably and naturally.Featuring long-lasting
            Cherry MX mechanical keyswitches, wear-proof ABS double injection
            keycaps, and a solid aluminum top-plate, the KM360 mechanical
            keyboard is the perfect daily mechanical keyboard.
          </p>
        </div>
      </div>
      <div className="g-skill-banner-right">
        <h1>KM360</h1>
        <div className="description2">
          <h2>N-Key Rollover (NKRO)</h2>
          <p>
            With n-key rollover input, the keyboard will register all
            keypresses, even when all keys are pressed down at the same time, so
            you can execute multiple actions at the same time with precision and
            accuracy.
          </p>
        </div>
        <Fade right>
          <img
            className="black-keyboard"
            src="https://www.gskill.com/_upload/images/1904031637480.png"
            alt=""
          />
        </Fade>
      </div>
    </div>
  );
}
export default Gskill;
