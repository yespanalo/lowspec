import "./DeathAdder.css";
import Slide from "react-reveal/Slide";
function Deathadder() {
  return (
    <section>
      <div className="deathadder-img">
        <Slide right>
          <div className="deathadder-information">
            <h2>RAZER DEATHADDER V2</h2>
            <p>
              Best in class ergonomics with over 10 million Razer DeathAdders
              sold, the most celebrated and awarded gaming mouse in the world
              has earned its popularity through its exceptional ergonomic
              design.
            </p>
            <a href="/mouse">Learnmore </a>
          </div>
        </Slide>
      </div>
    </section>
  );
}
export default Deathadder;
