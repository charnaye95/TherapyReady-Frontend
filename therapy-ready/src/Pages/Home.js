import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="searchbar">
        <h1>
          ____________________<button className="search-button">Search</button>
        </h1>
      </div>

      <div>
        <br></br>
        <h2 className="featured">Featured Clinics</h2>
        <br></br>

        <h2 className="featured">Featured Therapists</h2>
      </div>
      <br></br>
      <Link to="/assessments">
        <div className="assessment-button">
          <button Navigate>
            <p>Take one of our many assessments!</p>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
