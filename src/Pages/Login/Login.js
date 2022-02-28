import { authentication } from "../../Firebase/Firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./Login.css";
import SigninButton from "./SigninButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { userAuthentication } = props;
  const { setUserName } = props;
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  onAuthStateChanged(authentication, (currentUser) => {
    setUser(currentUser);
  });

  function signinWithGoogle() {
    //dito pag nag log in sa google
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        //pag successfull yung login..eto gagawin
        console.log(re);
        const name = re.user.displayName;
        localStorage.setItem("name", name);
        // userAuthentication(); //eto funtion para malaman nung buong system na may nakuha ng credentials
        navigate("/"); //eto para mapunta sa homepage after ng login
        setUserName(name); //eto naman para mag appear sa homepage yung pangalan nung nag login na user
        console.log(name);
      })
      .catch((err) => {
        //pag di successfull yung log in eto naman gagawin
        console.log(err); //mag pprint lang ng error message
      });
  }

  return (
    <div className="sign-in">
      <div className="left">
        <img src="lowspec.png" alt="" />
        <h1>Sign in.</h1>
        <p>Please enter your details.</p>

        <form>
          <div className="sign-in-email">
            <input type="text" placeholder="Enter your Email" />
          </div>

          <div className="sign-in-email-password">
            <input type="password" placeholder="Enter your Password" />
          </div>
          <SigninButton />
          <p className="or">or</p>
        </form>
        <button className="google-button" onClick={signinWithGoogle}>
          Sign In with Google
        </button>
      </div>
      <div className="right">
        <img src="pog.svg" alt="" />
        {/* <p>{authentication.currentUser.email}</p> */}
      </div>
    </div>
  );
}
export default Login;
