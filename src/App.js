import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import KeyBoard from "./Pages/Keyboard/KeyBoard";
import Login from "./Pages/Login/Login";
import { authentication } from "./Firebase/Firebase";
import React, { useMemo } from "react";

import { useState } from "react";
import CheckOut from "./Pages/CheckoutPage/Checkout";
import { UserContext } from "./UserContext";
import NavBarLogout from "./Components/NavBar/NavBarLogout";
import MonitorPage from "./Pages/Monitor/monitor";
import Mouse from "./Pages/Mouse/Mouse";
import Headphones from "./Pages/headphones/headphones";
function App(props) {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  // const userAuthentication = () => {
  //   setUserLoggedIn(!isUserLoggedIn);
  // };
  authentication.onAuthStateChanged((user) => {
    if (user) {
      return setUserLoggedIn(true);
    }
    setUserLoggedIn(false);
  });
  const items = [
    {
      title: "Razer DeathAdder V2",
      description: "Wired Gaming Mouse with Best-in-class Ergonomics",
      price: "₱3,578.37",
      feature1: "Best-In-Class Ergonomics",
      feature2: "Razer™ Optical Mouse Switch",
      feature3: "Razer™ Focus+ Optical Senso",
    },
  ];

  if (isUserLoggedIn === true) {
    return (
      <div className="App">
        <NavBarLogout
          // userAuthentication={userAuthentication}
          userName={userName}
          setUserName={setUserName}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home userName={userName} isUserLoggedIn={isUserLoggedIn} />
            }
          />
          <Route
            exact
            path="/keyboard"
            element={<KeyBoard isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            exact
            path="/login"
            element={
              <Login
                // userAuthentication={userAuthentication}
                setUserName={setUserName}
              />
            }
          />
          <Route exact path="/monitor" element={<MonitorPage />} />
          <Route exact path="/mouse" element={<Mouse />} />
          <Route exact path="/headphones" element={<Headphones />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar
          // userAuthentication={userAuthentication}
          userName={userName}
          setUserName={setUserName}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home userName={userName} isUserLoggedIn={isUserLoggedIn} />
            }
          />
          <Route
            exact
            path="/keyboard"
            element={<KeyBoard isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            exact
            path="/login"
            element={
              <Login
                // userAuthentication={userAuthentication}
                setUserName={setUserName}
              />
            }
          />
          <Route exact path="/monitor" element={<MonitorPage />} />
          <Route exact path="/mouse" element={<Mouse />} />
          <Route exact path="/headphones" element={<Headphones />} />
        </Routes>
      </div>
    );
  }
}

export default App;

{
  // <Route
  //         exact
  //         path="/keyboard"
  //         element={
  //           <CheckOut
  //             title={items[0].title}
  //             description={items[0].description}
  //             price={items[0].price}
  //             feature1={items[0].feature1}
  //             feature2={items[0].feature2}
  //             feature3={items[0].feature3}
  //           />
  //         }
  //       ></Route>
}
