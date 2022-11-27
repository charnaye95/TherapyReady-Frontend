import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function TherapistDetail() {
    const { id } = useParams()
    const singleTherapistUrl = `https://therapyready-backend.up.railway.app/therapists/${id}`

    const [singleTherapist, setSingleTherapist] = useState(null);

    const getSingleTherapist = () => {
        axios.get(singleTherapistUrl)
            .then((res) => setSingleTherapist(res.data))
            .catch(console.error);
    }

    useEffect(() => {
        getSingleTherapist()
    }, [])

    console.log(singleTherapist)

    if (!singleTherapist) return <h1>"No data rendered"</h1>;

    return (
        <div key={singleTherapist.id}>
            <br></br>
            <div className='flex justify-center'>
                <img
                    src={singleTherapist.image}
                    className="w-25 h-1/2"
                    alt="therapist profile"
                ></img>
            </div>
            <br></br>
            <div className="info text-lg">
                <p>
                    <b>{singleTherapist.name}</b>
                </p>
                <p>
                    <b>Bio:</b> {singleTherapist.bio}
                </p>
                <p>
                    {" "}
                    <b>License:</b> {singleTherapist.license}
                </p>
                <p>
                    <b>Specialty:</b> {singleTherapist.specialty}
                </p>
                <p>
                    <b>Insurances Accepted:</b> {singleTherapist.insurance_taken}
                </p>
                <p><b>Pricing: </b>{singleTherapist.price_range}</p>
                <p>
                    <b>Offers sliding scale for pricing?</b>{" "}
                    {singleTherapist.sliding_scale === true ? (
                        <input type={"checkbox"} defaultChecked></input>
                    ) : (
                        <input type={"checkbox"}></input>
                    )}
                </p>
                <p>
                    <b>Virtual appointments?</b>{" "}
                    {singleTherapist.virtual === true ? (
                        <input type={"checkbox"} defaultChecked></input>
                    ) : (
                        <input type={"checkbox"}></input>
                    )}
                </p>
                <p>
                    If interested, contact me at{" "}
                    <a href={`mailto: ${singleTherapist.email}`}><b>{singleTherapist.email}</b></a>
                </p>
                <br></br>
                <div>
                    <Link to={`/therapists/${id}/update`}>
                        <button className="update form-button">
                            Update Information
                        </button>
                    </Link>
                    <Link to={`/therapists/${id}/delete`}>
                        <button className="delete form-button">
                            Delete Therapist from Database
                        </button>
                    </Link>
                </div>
                <br></br>

            </div>
        </div>
    )
}

export default TherapistDetail