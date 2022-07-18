import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Components/Searchbar";

function Home({ clinics, therapists }) {

  return (
    <div>
      <div className="search-block">
        <Searchbar clinics={clinics} therapists ={therapists}/>
      </div>

      <div className="featured">
        <h2>Featured Clinics</h2>
        <br></br>
        <div className="featured-clinics">
          {clinics.slice(2).map((clinic) => (
            <div>
              <img
                src={clinic.image}
                alt="clinic"
                className="clinic-image"
              ></img>
              <p>{clinic.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="featured">
        <h2>Featured Therapists</h2>
        <br></br>
        <div className="featured-therapists">
          {therapists.slice(2).map((therapist) => (
            <div>
              <img
                src={therapist.image}
                alt="therapist"
                className="therapist-image"
              ></img>
              <p>{therapist.name}</p>
            </div>
          ))}
        </div>
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
