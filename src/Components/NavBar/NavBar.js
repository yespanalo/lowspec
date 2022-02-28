import React, { useState } from "react";
import "./NavBar.css";
import App from "../../App";
import { authentication } from "../../Firebase/Firebase";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const { setUserName } = props;
  const { userName } = props;
  // function logout() {
  //   authentication.signOut();
  //   setUserName = "Guest";
  //   localStorage.setItem("name", null);
  //   console.log("success");
  // }
  const name = localStorage.getItem("name");
  return (
    <div className="navigation-bar">
      <img className="navigation-bar-logo" src="lowspec.svg" alt="Logo SVG" />
      <ul className="navigation-bar-pages-links">
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/keyboard"> Keyboard</a>
        </li>
        <li>
          <a href="/mouse"> Mouse</a>
        </li>
        <li>
          <a href="/monitor"> Monitor</a>
        </li>
        <li>
          <a href="/headphones"> Headphones</a>
        </li>
        <li>
          <a href="/login">
            <button>Login</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
