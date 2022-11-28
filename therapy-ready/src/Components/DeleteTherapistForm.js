import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DeleteTherapistForm() {
  const { id } = useParams()
  const singleTherapistUrl = `https://therapyready-backend.herokuapp.com/therapists/${id}`

  const deleteTherapist = () => {
    axios.delete(singleTherapistUrl)
      .then((res => console.log('deleted data', res)))
      .catch(console.error);
  }

  const handleDeleteSubmit = () => {
    deleteTherapist()
    alert('It has been deleted from our database')
    window.location.assign('/therapists')
  }

  return (
    <div className='create-form'>

      <h1 className='title'>Delete Therapist from Database</h1>
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

export default DeleteTherapistForm