import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateTherapistForm() {

  const { id } = useParams()
  const singleTherapistUrl = `https://therapyready-backend.up.railway.app/therapists/${id}`

  //states for form
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [city, setCity] = useState('');
  const [license, setLicense] = useState('Licensed Professional Counselor (LPC)');
  const [specialties, setSpecialties] = useState('');
  const [insurances, setInsurances] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [slidingScale, setSlidingScale] = useState(false);
  const [virtual, setVirtual] = useState(false);
  const [email, setEmail] = useState('');

  //prefill form
  const getSingleTherapist = async () => {
    const { data } = await axios.get(singleTherapistUrl)
    console.log(data)
    setImage(data.image)
    setName(data.name)
    setBio(data.bio)
    setCity(data.city)
    setLicense(data.license)
    setSpecialties(data.specialty)
    setInsurances(data.insurance_taken)
    setPriceRange(data.price_range)
    setSlidingScale(data.sliding_scale)
    setVirtual(data.virtual)
    setEmail(email)
  }

  useEffect(() => {
    getSingleTherapist()
  }, [])

  const updateTherapist = () => {
    axios.put(singleTherapistUrl, {
      clinic: 1,
      image: image,
      name: name,
      bio: bio,
      city: city,
      license: license,
      specialty: specialties,
      insurance_taken: insurances,
      price_range: priceRange,
      sliding_scale: slidingScale,
      virtual: virtual,
      email: email,
    })
      .then((res) => console.log('updata data', res))
      .catch(console.error)
  }

  function handleUpdateSubmit(event) {
    event.preventDefault();
    updateTherapist()
    alert('It has been updated in our database')
    window.location.assign('/therapists')
  }

  return (
    <div className='create-form'>

      <h1 className='title'>Add Therapist to Database</h1>
      <p className='disclaimer'> *Each field must be filled out*</p>
      <br></br>
      <form
      // onSubmit={handleSubmit}
      >
        <label>Image:</label>
        <textarea
          value={image}
          onChange={(event) => setImage(event.target.value)}>
        </textarea>
        {console.log(image)}

        <label>Name:</label>
        <input
          type='text'
          required
          value={name}
          onChange={(event) => setName(event.target.value)}>
        </input>
        {console.log(name)}


        <label>Bio:</label>
        <textarea
          value={bio}
          onChange={(event) => setBio(event.target.value)}>
        </textarea>
        {console.log(bio)}

        <label>City:</label>
        <input
          type='text'
          required
          value={city}
          onChange={(event) => setCity(event.target.value)}>
        </input>
        {console.log(city)}

        <label>License:</label>
        <select
          value={license}
          onChange={(event) => setLicense(event.target.value)}>
          <option value="Licensed Professional Counselor (LPC)">Licensed Professional Counselor (LPC)</option>
          <option value="Licensed Marriage and Family Therapist (LMFT)">Licensed Marriage and Family Therapist (LMFT)</option>
          <option value="Licensed Clinical Social Worker (LCSW)">Licensed Clinical Social Worker (LCSW)</option>
        </select>
        {console.log(license)}

        <label>Specialties:</label>
        <textarea
          value={specialties}
          onChange={(event) => setSpecialties(event.target.value)}>
        </textarea>
        {console.log(specialties)}

        <label>Insurances Accepted:</label>
        <textarea
          value={insurances}
          placeholder="if you don't accept insurance, type in None"
          onChange={(event) => setInsurances(event.target.value)}>
        </textarea>
        {console.log(insurances)}

        <label>Price Range:</label>
        <input
          type='text'
          required
          value={priceRange}
          placeholder='format: "Starting at ___"'
          onChange={(event) => setPriceRange(event.target.value)}>
        </input>
        {console.log(priceRange)}

        <label>Offers sliding scale for pricing:</label>
        <select
          value={slidingScale}
          onChange={(event) => setSlidingScale(event.target.value)}>

          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        {console.log(slidingScale)}

        <label>Virtual appointments offered:</label>
        <select
          value={virtual}
          onChange={(event) => setVirtual(event.target.value)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        {console.log(virtual)}

        <label>Email:</label>
        <input type='text'
          required
          value={email}
          placeholder='must be in the format of a valid email address'
          onChange={(event) => setEmail(event.target.value)}>
        </input>
        {console.log(email)}


        <button
          onClick={handleUpdateSubmit}
        >
          Confirm
        </button>
      </form>
      <br></br>
    </div>
  )
}

export default UpdateTherapistForm