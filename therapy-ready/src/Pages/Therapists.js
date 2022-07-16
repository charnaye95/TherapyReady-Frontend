import React from "react";

function Therapists({ therapists }) {
  return (
    <div>
      <p>
        {therapists.map((therapist) => (
          <div className="therapists-list" key={therapist.id}>
            <img
              src={therapist.image}
              className="therapist-picture"
              alt="therapist"
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
              <p>{therapist.price_range}</p>
              <p>
                Offers sliding scale for pricing?{" "}
                {therapist.sliding_scale === true ? (
                  <input type={"checkbox"} checked></input>
                ) : (
                  <input type={"checkbox"}></input>
                )}
              </p>
              <p>
                If interested, contact me at{" "}
                <a href={'mailto: {therapist.email}'}>{therapist.email}</a>
              </p>
            </div>
          </div>
        ))}
      </p>
    </div>
  );
}

export default Therapists;
