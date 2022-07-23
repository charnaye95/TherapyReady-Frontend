import React from "react";
import { useNavigate } from "react-router-dom";

function Searchbar({ dataResults, handleResults }) {
  let navigate = useNavigate();
  console.log(dataResults)

  return (
    <div className="searchbar">
      <div className="search-inputs">
        <input type="text" placeholder=" Enter your city" onChange={handleResults}></input>
        <button className="search-button" onClick={() => navigate("/results")}> Search</button>
      </div>
      {/* <div className="search-results">
        {dataResults.map((value, index) => {
          return (
          <div key={index}>
            <p>{value.city}</p>
          </div>
        )})}
      </div> */}
    </div>
  );
}

export default Searchbar;
