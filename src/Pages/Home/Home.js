import React from "react";
import Footer from "../../Footer";
import Button from "./Button/Button";
import Deathadder from "./Deathadder";
import Gskill from "./Gskill";
import "./Home.css";
import ItemLogo from "./ItemLogo/ItemLogo";
import Monitor from "./Monitor";
import Bounce from "react-reveal/Bounce";

const Home = (props) => {
  const { userName, isUserLoggedIn } = props;
  console.log(localStorage.getItem("name"));

  return (
    <div className="home-page">
      <div className="title-blackshark">
        <Bounce left>
          <h2> Welcome {localStorage.getItem("name")}</h2>
        </Bounce>
      </div>
      <div className="blackshark-pictures">
        <img
          className="bshark-picture"
          src="https://dl.razerzone.com/src/2718-1-EN-v2.png"
          alt=""
        />
        <img
          className="bshark-picture"
          src="https://assets2.razerzone.com/images/pnx.assets/05901860d456e95ed88cfcfe73ef895e/bsv2pro1500x1000-8.png"
          alt=""
        />

        <img
          className="bshark-picture"
          src="https://i5.walmartimages.com/asr/d0f15da5-4dec-492a-b3aa-f6f807c32798.0aad2d3ef396533441c5dcd084ddd665.png"
          alt=""
        />
      </div>
      <div className="blackshark-features">
        <div className="blackshark-features-logo">
          <img src="lightweight-logo.png" alt="" />
          <h2>Lightweight Design</h2>
        </div>
        <div className="blackshark-features-logo">
          <img src="detachable-mic-logo.png" alt="" />
          <h2>Detachable Mic</h2>
        </div>
        <div className="blackshark-features-logo">
          <img src="on-headset-controls.png" alt="" />
          <h2>Headset Controls</h2>
        </div>
        <div className="black-shark-buttons">
          <a href="/headphones">
            <Button text="Learn More" />
          </a>
          <a href="">
            <Button text="Order Now" />
          </a>
        </div>
      </div>
      <div className="grey-banner">
        <h1>ALREADY KNOW WHAT YOU'RE LOOKING FOR?</h1>
        <ul className="grey-banner-items">
          <li>
            <ItemLogo
              link="https://assets2.razerzone.com/images/pnx.assets/f4927747181a510e228516e555fdfdde/compact-keyboard.svg"
              title="Keyboard"
              direct="/keyboard"
            />
          </li>
          <li>
            <ItemLogo
              link="https://assets2.razerzone.com/images/pnx.assets/fe84ded9d0fbe30130b417ebf9a7f824/icon-wired-mouse.svg"
              title="Mouse"
              direct="/mouse"
            />
          </li>
          <li>
            <ItemLogo
              link="https://assets2.razerzone.com/images/pnx.assets/4ce123d23c1b1346be35330e1d59f7ed/application.svg"
              title="Monitor"
              direct="/monitor"
            />
          </li>
          <li>
            <ItemLogo
              link="https://assets2.razerzone.com/images/pnx.assets/01f17d1a0286ebb3b9c2063f8436ebcc/audio-icon-headset.svg"
              title="Headphones"
              direct="/headphones"
            />
          </li>
        </ul>
      </div>
      <Gskill />
      <Deathadder />
      <Monitor />
      <Footer />
    </div>
  );
};

export default Home;
