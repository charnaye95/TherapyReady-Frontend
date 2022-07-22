import React from "react";

function SearchResults({ dataResults }) {
  console.log(dataResults);
  if (dataResults.length === 0) return <h1 className="text-center">"No matching results detected"</h1>;

  return (
    <div>
      <h1 className='text-center title'>Search Results</h1>
      <p>
        {dataResults.map((result, index) => (
          <div className="clinics-list" key={index}>
            <img
              src={result.image}
              className="w-1/4 h-1/4"
              alt="therapist"
            ></img>
            <div className="info">
              <p> <b> {result.name} </b> </p>
              {console.log(result.name)}
              <p> {result.bio} </p>
              <p>{result.street_number_and_name}</p>
              <p>
                {" "}
                {result.city} {result.state}
              </p>
              <a href={`tel: ${result.phone_number}`}>{result.phone_number}</a>
              <p> {" "} {result.license} </p>
              <p> {result.specialty} </p>
              <a href={`mailto: ${result.email}`}><b>{result.email}</b></a>
              <br></br>
            </div>
          </div>
        ))}
      </p>
    </div>
  );
}

export default SearchResults;
