import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ clinics, therapists }) {
  const [searchString, setSearchString] = useState("");

  return (
    <div>
      <div className="search-block">
        <div className="searchbar">
          {/* <h1>
            ____________________
            <button className="search-button">Search</button>
          </h1> */}
          <form>
            <input type="text"></input>
            <br></br>
            <br></br>
            <button className="search-button">Clinic Search</button>
            <button className="search-button">Therapist Search</button>
          </form>
        </div>
      </div>

      <div className="featured">
        <h2>Featured Clinics</h2>
        <br></br>
        <p className="featured-clinics">
          {clinics.slice(2).map((clinic) => (
            <div>
              <img src={clinic.image} alt="clinic" className="clinic-image"></img>
              <h2>{clinic.name}</h2>
            </div>
          ))}
        </p>
      </div>
      <div className="featured">
        <h2>Featured Therapists</h2>
        <br></br>
        <p className="featured-therapists">
          {therapists.slice(2).map((therapist) => (
            <div>
              <img src={therapist.image} alt="therapist" className="therapist-image"></img>
              <h2>{therapist.name}</h2>
            </div>
          ))}
        </p>
      </div>

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
