import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Home({ clinics, therapists }) {

  const [searchString, setSearchString] = useState('');

  return (
    <div>
      <div className="search-block">
        <div className="searchbar">
          {/* <h1>
            ____________________
            <button className="search-button">Search</button>
          </h1> */}
          <form>
            <input type='text'></input>
            <br></br>
            <br></br>
            <button className="search-button">Clinic Search</button>
            <button className="search-button">Therapist Search</button>
          </form>
        </div>
      </div>

      <div className="featured">
        <h2 >Featured Clinics</h2>
        <div className="clinic-image">
        <img src="https://www.joelandgranot.com/warehouse/fm/images/properties/129/_MG_5769-LR-10.jpg" alt="550 pharr rd"></img>
        {/* <img src=></img>
        <img src=></img> */}
        </div>
        <p className="featured-clinics">
          {clinics.slice(2).map((clinic) => (
            <div>{clinic.name}</div>
          ))}
        </p>
      </div>
      <div className="featured">
        <h2>Featured Therapists</h2>
        <p className="featured-therapists">
          {therapists.slice(2).map((therapist) => (
            <div>{therapist.name}</div>
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
