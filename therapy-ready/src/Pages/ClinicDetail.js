import React from 'react'
import { useParams, Link } from 'react-router-dom';

function ClinicDetail({ clinics }) {
  const { id } = useParams()
  const clinic = clinics[id]

  console.log(clinic)

  if (!clinic) return <h1>"No data rendered"</h1>;

  return (
    <div>
      <div key={id}>
        <br></br>
        <div className='flex justify-center'>
          <img
            src={clinic.image}
            className="w-96 h-64"
            alt="inside of clinic"
          ></img>
        </div>
        <br></br>
        <div className="info text-lg">
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
            <a href={`tel: ${clinic.phone_number}`}><b>Phone:</b> {clinic.phone_number}</a>
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
          <Link to={`/clinics/${id}/update`}>
            <button className="update form-button">
              Update Information
            </button>
            </Link>

            <Link to="/deleteclinic">
              <button className="delete form-button">
                Delete Clinic from Database
              </button>
            </Link>
          </div>
          <br></br>

        </div>
      </div>
    </div>
  )
}

export default ClinicDetail