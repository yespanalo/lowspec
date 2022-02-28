import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="toend">
        <div className="social-media-links">
          <p>LOWSPEC.ROAD TO IRON.™</p>
          <div className="social-media-icons">
            <img className="social-icons" src="./fb-logo.png" alt="" />
            <img className="social-icons" src="./instagram-logo.png" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <p className="reserve">
        Copyright © 2022 LowSpec Inc. All rights reserved.
      </p>
    </div>
  );
}
export default Footer;
