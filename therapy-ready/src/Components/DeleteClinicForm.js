import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function DeleteClinicForm() {

  const { id } = useParams()
  const singleClinicUrl = `https://therapyready-backend.up.railway.app/clinics/${id}`

  const deleteClinic = () => {
    axios.delete(singleClinicUrl)
      .then((res => console.log('deleted data', res)))
      .catch(console.error);
  }

  const handleDeleteSubmit = () => {
    deleteClinic()
    alert('It has been deleted from our database')
    window.location.assign('/clinics')
  }

  return (
    <div className='create-form'>

      <h1 className='title'>Delete Clinic from Database</h1>
      <p className='disclaimer'> Are you sure you want to delete this from our database?</p>
      <br></br>
      <button>Cancel</button>
      <button
        onClick={(event) => handleDeleteSubmit(id, event)}
      >
        Yes
      </button>
      <br></br>
    </div>
  )
}

export default DeleteClinicForm
