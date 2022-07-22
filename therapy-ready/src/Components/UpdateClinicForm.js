import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function UpdateClinicForm({getClinics}) {

const { id } = useParams()
const navigate = useNavigate()
const singleClinicUrl = `https://therapyready-backend.herokuapp.com/clinics/${id}`
  //states for form
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [streetNumAndName, setStreetNumAndName] = useState('');
  const [city, setCity] = useState('');
  const [stateInitial, setStateInitial] = useState('');
  const [phone, setPhone] = useState('');
  const [supportGroups, setSupportGroups] = useState(false);

// console.log(getClinics)

const getSingleClinic = () => {
  axios.get(singleClinicUrl)
  .then((res => console.log('getting data', res)))
  .catch(console.error);
}

const alternateFunction = async () => {
  await axios.get(singleClinicUrl)
  .then((res => console.log('posting data', res)))
  .catch(console.error);
}

useEffect(() => {
getSingleClinic()
}, [])

  return (
    <div>UpdateClinicForm</div>
  )
}

export default UpdateClinicForm