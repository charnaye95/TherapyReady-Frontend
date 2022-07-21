import React from "react";
import { Link } from "react-router-dom";

function Clinics({ clinics, dataResults, clinicResults }) {
  // I want for when i click on the button on the homepage for it to go to this page and show the search results of the clinics. and if nothing was searched, then display all of them(written under the return statement)

  return (
    <>
      {" "}
      {/* dataResults show */}
      {dataResults.length > 0 ? (
        dataResults.map((clinic, index) => {
          console.log(clinic.name);
          return (
          <div>
            <h1 className="create">Search Results</h1>
            <div className="clinics-list" key={index}>
              <img
                src={clinic.image}
                className="clinic-image"
                alt="therapist"
              ></img>
              <div className="info">
                <p>
                  <b>{clinic.name}</b>
                </p>
                <p>{clinic.street_number_and_name}</p>
                <p>
                  {" "}
                  {clinic.city}, {clinic.state}
                </p>
                <p>
                  <b>Specialty:</b> {clinic.phone_number}
                </p>
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
                  <button className="update form-button">
                    Update Information
                  </button>
                  <Link to="/deleteclinic">
                    <button className="delete form-button">
                      Delete Clinic from Database
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          );
        })
      ) : (
        // all clinics show
        <div>
          <div className="create">
            <button className="form-button">Add Clinic to Database</button>
          </div>
          <div>
            <p>
              {clinics.map((clinic, index) => (
                <div className="clinics-list" key={index}>
                  <img
                    src={clinic.image}
                    className="clinic-image"
                    alt="therapist"
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
                      <b>Specialty:</b> {clinic.phone_number}
                    </p>
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
                      <button className="update form-button">
                        Update Information
                      </button>
                      <Link to="/deleteclinic">
                        <button className="delete form-button">
                          Delete Clinic from Database
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Clinics;
