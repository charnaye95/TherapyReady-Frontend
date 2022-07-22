import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function TherapistDetail({ therapists }) {
    const { id } = useParams()
    const therapist = therapists[id]

    console.log(therapist)

    if (!therapist) return <h1>"No data rendered"</h1>;

    return (
        <div key={id}>
            <br></br>
            <div className='flex justify-center'>
                <img
                    src={therapist.image}
                    className="w-25 h-1/2"
                    alt="therapist profile"
                ></img>
            </div>
            <br></br>
            <div className="info text-lg">
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
                <p><b>Pricing: </b>{therapist.price_range}</p>
                <p>
                    <b>Offers sliding scale for pricing?</b>{" "}
                    {therapist.sliding_scale === true ? (
                        <input type={"checkbox"} checked></input>
                    ) : (
                        <input type={"checkbox"}></input>
                    )}
                </p>
                <p>
                    <b>Virtual appointments?</b>{" "}
                    {therapist.virtual === true ? (
                        <input type={"checkbox"} checked></input>
                    ) : (
                        <input type={"checkbox"}></input>
                    )}
                </p>
                <p>
                    If interested, contact me at{" "}
                    <a href={`mailto: ${therapist.email}`}><b>{therapist.email}</b></a>
                </p>
                <br></br>
                <div>
                    <Link to={`/therapists/${id}/update`}>
                        <button className="update form-button">
                            Update Information
                        </button>
                    </Link>
                    <Link to="/deleteclinic">
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