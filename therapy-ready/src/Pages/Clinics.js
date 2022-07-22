import React from "react";
import { Link } from "react-router-dom";

function Clinics({ clinics }) {
  // I want for when i click on the button on the homepage for it to go to this page and show the search results of the clinics. and if nothing was searched, then display all of them(written under the return statement)
  return (
    <>
      <div>
        <div className="create">
          <Link to='/addclinic'>
            <button className="form-button">Add Clinic to Database</button>
          </Link>
        </div>
        <div>
          <p>
            {clinics.map((clinic, index) => (
              <div className="clinics-list" key={index}>
                <img
                  src={clinic.image}
                  className="clinic-image"
                  alt="inside of clinic"
                ></img>
                <div className="info">
                  <p>
                    <b>{clinic.name}</b>
                  </p>
                  {console.log(clinic.name)}
                  <p>{clinic.street_number_and_name}</p>
                  <p>
                    {" "}
                    {clinic.city}, {clinic.state}
                  </p>
                  <p>
                  <a href={`tel: ${clinic.phone_number}`}><b>Phone:</b> {clinic.phone_number}</a>                  </p>
                  <p>
                    Support Groups?{" "}
                    {clinic.support_groups === true ? (
                      <input type={"checkbox"} checked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                  <br></br>
                  <div>
                    <Link to={`/clinics/${index}`}>
                      <button className="form-button">
                        More Details...
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

export default Clinics;
