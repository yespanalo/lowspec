import "./Monitor.css";
import Slide from "react-reveal/Slide";
function Monitor() {
  return (
    <div className="monitor-background">
      <img src="./monitor.png" alt="" />
      <Slide left>
        <div className="description-monitor">
          <h2>ULTRA GEAR CURVED</h2>
          <p>
            LG’s premium UltraWide monitors immerse you in everything from
            content creation to gaming. See a panoramic view with the extra wide
            21:9 IPS display for true color accuracy at wide angles.
          </p>
          <a href="/monitor">Learnmore </a>
        </div>
      </Slide>
    </div>
  );
}
export default Monitor;
