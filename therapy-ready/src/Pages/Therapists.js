import React from "react";

function Therapists({ therapists }) {

  return (
    <>
    <div>
          <p>
            {therapists.map((therapist, index) => (
              <div className="therapists-list" key={index}>
                <img
                  src={therapist.image}
                  className="therapist-picture"
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
                      <input type={"checkbox"} checked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                  <p>
                    <b>Virtual appointments?</b>{" "}
                    {therapist.virtual === true ? (
                      <input type={"checkbox"} checked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                  <p>
                    If interested, contact me at{" "}
                    <a href={`mailto: ${therapist.email}`}><b>{therapist.email}</b></a>
                  </p>
                </div>
              </div>
            ))}
          </p>
        </div>
      
    </>
  );
}

export default Therapists;
