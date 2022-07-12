import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="pages">
          <Link to="/">
            <div>
              <h1>TherapyReady</h1>
            </div>
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
        <div className="signup-login-nav">
          <Link to="/signup">
            <h1>Sign Up</h1>
          </Link>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
