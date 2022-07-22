import React from "react";
import {Link} from 'react-router-dom'

function Therapists({ therapists }) {

  if (!therapists) return <h1>"No data rendered"</h1>;

  return (
    <>
    <div className="create">
          <Link to='/therapists/create'>
            <button className="form-button">Add Therapist to Database</button>
          </Link>
        </div>
    <div>
          <div>
            {therapists.map((therapist, index) => (
              <div className="therapists-list" key={index}>
                <img
                  src={therapist.image}
                  className="w-64 h-3/4"
                  alt="therapist profile"
                ></img>
                <div className="info">
                  <p>
                    <b>{therapist.name}</b>
                  </p>
                  <p>
                    <b>Bio:</b> {therapist.bio}
                  </p>
                  <p>
                    {" "}
                    <b>License:</b> {therapist.license}
                  </p>
                  <p>
                    <b>Specialty:</b> {therapist.specialty}
                  </p>
                  <p>
                    <b>Insurances Accepted:</b> {therapist.insurance_taken}
                  </p>
                  <p><b>Pricing: </b>{therapist.price_range}</p>
                  <p>
                    <b>Offers sliding scale for pricing?</b>{" "}
                    {therapist.sliding_scale === true ? (
                      <input type={"checkbox"} defaultChecked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                  <p>
                    <b>Virtual appointments offered?</b>{" "}
                    {therapist.virtual === true ? (
                      <input type={"checkbox"} defaultChecked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                  <p>
                    If interested, contact me at{" "}
                    <a href={`mailto: ${therapist.email}`}><b>{therapist.email}</b></a>
                  </p>
                  <br></br>
                  <div>
                    <Link to={`/therapists/${index}`}>
                      <button className="form-button">
                        More Details...
                      </button>
                    </Link>
                  </div>
                  <br></br>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
}

export default Therapists;
