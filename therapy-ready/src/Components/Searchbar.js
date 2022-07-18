import React, { useState } from "react";

function Searchbar({ clinics, therapists }) {
  // const [searchString, setSearchString] = useState("");
  const combined = clinics.concat(therapists)
  console.log(combined)

  const [dataResults, setDataResults] = useState([]);
 
  const handleResults = (event) => {
    const searchString = event.target.value
    const newData = combined.filter(value => {
      return value.name.toLowerCase().includes(searchString.toLowerCase())
    })
    setDataResults(newData);
    console.log(searchString)
  }

  //tried to put both results of clinics and therapists in same function, and it takes the lowest function call
  // const handleResults = (event) => {
  //   const searchString = event.target.value;
  //   const newClinicData = clinics.filter(value => {
  //     return value.name.toLowerCase().includes(searchString.toLowerCase())
  //   })
  //   const newTherapistData = therapists.filter((value) => {
  //     return value.name.toLowerCase().includes(searchString.toLowerCase())
  //   })
  //   setDataResults(newClinicData && newTherapistData);
  //   console.log(searchString)
  // }
  // const handleClinicResults = (event) => {
  //   const searchString = event.target.value
  //   const newClinicData = clinics.filter(value => {
  //     return value.name.toLowerCase().includes(searchString.toLowerCase())
  //   })
  //   setDataResults(newClinicData);
  //   console.log(searchString)
  // }
  // const handleTherapistResults = (event) => {
  //   const searchString = event.target.value
  //   const newTherapistData = therapists.filter((value) => {
  //     return value.name.toLowerCase().includes(searchString.toLowerCase())
  //   })
  //   setDataResults(newTherapistData);
  //   console.log(searchString)
  // }
  //tried to create one function that takes both functions in and is not working!
// const handleDataResults = (event) => {
//   handleClinicResults()
//   handleTherapistResults()
// }
  return (
    <div className="searchbar">
      <div className="search-inputs">
       <input type="text" placeholder=" Enter your city" onChange={handleResults}></input>  {/* tried to place both funcitons in onChange and taking the latest one */}
        <button className="search-button" onClick={handleResults} action='/clinics'>Clinic Search</button>
        <button className="search-button">Therapist Search</button>
      </div>
      <div className="search-results">
        {dataResults.map((value, key) => {
          return <div>{value.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Searchbar;
