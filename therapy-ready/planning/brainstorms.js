//clinic search
// const [clinicResults, setClinicResults] = useState([]);

// const handleClinicResults = (event) => {
//   const searchString = event.target.value;
//   const newData = clinics.filter((value) => {
//     return value.city.toLowerCase().includes(searchString.toLowerCase());
//   });
//   setClinicResults(newData);
//   console.log(searchString);
// };
//therapist search
// const [therapistResults, setTherapistResults] = useState([]);

// const handleTherapistResults = (event) => {
//   const searchString = event.target.value;
//   const newData = therapists.filter((value) => {
//     return value.city.toLowerCase().includes(searchString.toLowerCase());
//   });
//   setTherapistResults(newData);
//   console.log(searchString);
// };

// <Route path="/" element={
//     <Home
//       clinics={clinics}
//       therapists={therapists}
//       dataResults={dataResults}
//       handleResults={handleResults}
//       clinicResults={clinicResults}
//       handleClinicResults={handleClinicResults}
//       therapistResults={therapistResults}
//       handleTherapistResults={handleTherapistResults}
//     />
//   }
// />

// <Route path="/clinics" element={<Clinics 
//     clinics={clinics} 
//     clinicResults={clinicResults} 
//     />}
// />
// <Searchbar clinics={clinics} therapists ={therapists} dataResults={dataResults} handleResults={handleResults}  
// clinicResults={clinicResults}
// handleClinicResults={handleClinicResults}
// therapistResults={therapistResults}
// handleTherapistResults={handleTherapistResults}
// />

{/* {" "}
      {/* dataResults show
      
      {dataResults.length > 0 ? (
        dataResults.map((therapist, index) => {
          console.log(therapist.name);
          return (
            <div>
              <h1 className="create">Search Results</h1>
              <div className="therapists-list" key={index}>
                <img
                  src={therapist.image}
                  className="therapist-picture"
                  alt="therapist"
                ></img>
                <div className="info">
                  <p>
                    <b>{therapist.name}</b>
                  </p>
                  {console.log(therapist.clinic)}
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
                    <a href={"mailto: {therapist.email}"}>{therapist.email}</a>
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        // all therapists show
        <div>
          <p>
            {therapists.map((therapist, index) => (
              <div className="therapists-list" key={index}>
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
                    <a href={"mailto: {therapist.email}"}>{therapist.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </p>
        </div>
      )} */}

/* {" "}
dataResults show
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
)}} */

        // const alternateFunction = async () => {
  //   await axios.get(singleClinicUrl)
  //   .then((res => console.log('posting data', res)))
  //   .catch(console.error);
  // }