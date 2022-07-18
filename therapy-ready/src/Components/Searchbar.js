import React from "react";

function Searchbar({data}) {
  return (
    <div className="searchbar">
      <div className="search-inputs">
        <input type="text" placeholder="Enter a service you are looking for"></input>
        <button className="search-button">Clinic Search</button>
        <button className="search-button">Therapist Search</button>
      </div>
      <div className="search-results"></div>
    </div>
  );
}

export default Searchbar;
