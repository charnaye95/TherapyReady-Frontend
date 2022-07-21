import React from "react";
import { useNavigate } from "react-router-dom";

function Searchbar({ clinics, therapists, dataResults, handleResults, handleClinicResults, clinicResults }) {
  let navigate = useNavigate();

  return (
    <div className="searchbar">
      <div className="search-inputs">
       <input type="text" placeholder=" Enter your city" onChange={handleResults}></input>  {/* tried to place both funcitons in onChange and taking the latest one */}
        {/* <button className="search-button" onClick={() => navigate("/clinics")} >Clinic Search</button>
        <button className="search-button" onClick={() => navigate("/therapists")}>Therapist Search</button> */}
        <button className="search-button" onClick={() => navigate("/results")}> Search</button>
      </div>
      <div className="search-results">
        {dataResults.map((value, index) => {
          return <div key={index}>{value.city}</div>;
        })}
      </div>
    </div>
  );
}

export default Searchbar;
