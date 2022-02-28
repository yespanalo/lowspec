import { FirebaseError } from "firebase/app";
import { signOut } from "firebase/auth";
import { authentication } from "../../Firebase/Firebase";
import "./NavBar.css";
const NavBarLogout = (props) => {
  function signOut() {
    authentication.signOut();
    console.log("success");
    localStorage.setItem("name", "");
  }
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
          <a href="/" onClick={signOut}>
            <button>Logout</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBarLogout;
