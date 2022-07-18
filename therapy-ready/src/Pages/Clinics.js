import React from "react";

function Clinics({ clinics, dataResults }) {

  // I want for when i click on the button on the homepage for it to go to this page and show the search results of the clinics. and if nothing was searched, then display all of them(written under the return statement)
  if(dataResults) {
    <div className="search-results">
        {dataResults.map((value, key) => {
          return <div>{value.name}</div>;
        })}
      </div>
  } else
  return (
    <div>
      <div>
        {clinics.map((clinic) => (
          <div className="clinics-list" key={clinic.id}>
            <img src={clinic.image} className='clinic-image' alt="clinic"></img>
            <p>
              <b>{clinic.name}</b>
            </p>
            <p>{clinic.street_number_and_name}</p>
            <p>
              {clinic.city}, {clinic.state}
            </p>
            <p>Phone: {clinic.phone_number}</p>
            <p>
              Support Groups?{" "}
              {clinic.support_groups === true ? (
                <input type={"checkbox"} checked></input>
              ) : (
                <input type={"checkbox"}></input>
              )}
            </p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clinics;
