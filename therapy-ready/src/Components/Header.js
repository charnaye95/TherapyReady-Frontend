import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/brain.png";

function Header() {
  return (
    <div>
      <nav className="navbar">

        <div className="pages">
          <Link to="/"
          // onClick={() => window.location.assign("/")}
          >

            <h1 className="logo">
              <img
                src={logo}
                alt="Brain icons created by Darius Dan - Flaticon"
                className="logo"
              ></img>
              TherapyReady</h1>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/clinics">
            <p>Clinics</p>
          </Link>
          <Link to="/therapists">
            <p>Therapists</p>
          </Link>
          <Link to="/assessments">
            <p>Assessments</p>
          </Link>
        </div>

        {/* <div className="signup-login-nav">
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </div> */}
      </nav>
    </div>
  );
}
export default Header;
