import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Components/Searchbar";

function Home({ clinics, therapists, dataResults, handleResults }) {

  return (
    <div>
      <div className="search-block">
        <Searchbar clinics={clinics} therapists={therapists} dataResults={dataResults} handleResults={handleResults} />
      </div>

      <div className="featured">
        <h2>Featured Clinics</h2>
        <br></br>
        <div className="featured-clinics">
          {clinics?.slice(0, 3).map((clinic, index) => (
            <div key={index}>
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
          {therapists?.slice(2, 5).map((therapist, index) => (
            <div key={index}>
              <img
                src={therapist.image}
                alt="therapist"
                className="therapist-homepage"
              ></img>
              <p>{therapist.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Link to="/assessments">
        <div className="assessment-button">
          <p>
            Take one of our many assessments!
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Home;
