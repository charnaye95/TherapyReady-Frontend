import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateClinicForm({clinicUrl}) {
    // let navigate = useNavigate();

    //states for form
    const [image, setImage] = useState('');
    const [name, setName] = useState('')
    const [streetNumAndName, setStreetNumAndName] = useState('');
    const [city, setCity] = useState('');
    const [stateInitial, setStateInitial] = useState('');
    const [phone, setPhone] = useState('');
    const [supportGroups, setSupportGroups] = useState(false)

    const createClinic = () => {
        axios.post(clinicUrl, {
            //backend field: frontend field
            image: image,
            name: name,
            street_number_and_name: streetNumAndName,
            city: city,
            state: stateInitial,
            phone_number: phone,
            support_groups: supportGroups
        })
        .then((res => console.log('posting data', res)))
        .catch(console.error);
         }

    function handleSubmit(event) {
        event.preventDefault();
        createClinic()
        window.location.assign('/clinics')    
    }

    return (
        <div className='create-form'>

            <h1 className='title'>Add Clinic to Database</h1>
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


                <label>Street number and name:</label>
                <input 
                    type='text' 
                    required 
                    value={streetNumAndName} 
                    onChange={(event) => setStreetNumAndName(event.target.value)}>
                </input>
                {console.log(streetNumAndName)}

                <label>City:</label>
                <input 
                    type='text' 
                    required
                    value={city} 
                    onChange={(event) => setCity(event.target.value)}>
                </input>
                {console.log(city)}


                <label>State:</label>
                <input 
                    type='text'
                    required
                    maxLength='2'
                    placeholder='Must be 2 characters'
                    value={stateInitial} 
                    onChange={(event) => setStateInitial(event.target.value)}>
                </input>
                {console.log(stateInitial)}

                <label>Phone number:</label>
                <input 
                    type='text' 
                    required
                    maxLength='10'
                    placeholder='Must be 10 characters' 
                    value={phone} 
                    onChange={(event) => setPhone(event.target.value)}>
                </input>
                {console.log(phone)}

                <label>Support groups:</label>
                <select 
                    value={supportGroups} 
                    onChange={(event) => setSupportGroups(event.target.value)}>
                        
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                </select>
                {console.log(supportGroups)}

                <button 
                    onClick={handleSubmit}>
                        Confirm
                </button>
            </form>
            <br></br>
        </div>
    )
}

export default CreateClinicForm