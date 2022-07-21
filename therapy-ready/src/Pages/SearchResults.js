import React from "react";

function SearchResults({dataResults}) {
  console.log(dataResults);
  return (
      <div>
        <p>
          {dataResults.map((result, index) => (
            <div className="clinics-list" key={index}>
              <img
                src={result.image}
                className="clinic-image"
                alt="therapist"
              ></img>
              <div className="info">
                <p>
                  <b>{result.name}</b>
                </p>
                {console.log(result.name)}
                <p>{result.street_number_and_name}</p>
                <p>
                  {" "}
                  {result.city}, {result.state}
                </p>
                <p>
                  <b>Specialty:</b> {result.phone_number}
                </p>
                <p>
                  Support Groups?{" "}
                  {result.support_groups === true ? (
                    <input type={"checkbox"} checked></input>
                  ) : (
                    <input type={"checkbox"}></input>
                  )}
                </p>
                <br></br>
              </div>
            </div>
          ))}
        </p>
      </div>
  );
}

export default SearchResults;
