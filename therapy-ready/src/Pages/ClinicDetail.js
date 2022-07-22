import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ClinicDetail({ clinics }) {
  const { id } = useParams()
  const singleClinicUrl = `https://therapyready-backend.herokuapp.com/clinics/${id}`

  const [singleClinic, setSingleClinic] = useState(null);

const getSingleClinic = () => {
  axios.get(singleClinicUrl)
    .then((res) => setSingleClinic(res.data))
    .catch(console.error);
}

useEffect(() => {
  getSingleClinic()
  }, [])

  console.log(singleClinic)

  if (!singleClinic) return <h1>"No data rendered"</h1>;

  return (
    <div>
      <div key={singleClinic.id}>
        <br></br>
        <div className='flex justify-center'>
          <img
            src={singleClinic.image}
            className="w-96 h-64"
            alt="inside of clinic"
          ></img>
        </div>
        <br></br>
        <div className="info text-lg">
          <p> <b> {singleClinic.name} </b> </p>
          {console.log(singleClinic.name)}
          <p>{singleClinic.street_number_and_name}</p>
          <p>
            {" "}
            {singleClinic.city}, {singleClinic.state}
          </p>
          <p>
            <a href={`tel: ${singleClinic.phone_number}`}><b>Phone:</b> {singleClinic.phone_number}</a>
          </p>
          <p>
            Support Groups?{" "}
            {singleClinic.support_groups === true ? (
              <input type={"checkbox"} defaultChecked></input>
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