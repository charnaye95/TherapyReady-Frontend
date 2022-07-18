import React from "react";

function Clinics({ clinics }) {
  return (
    <div>
      <div>
        {clinics.map((clinic) => (
          <div className="clinics-list" key={clinic.id}>
            <img src={clinic.image} className='clinic-image'></img>
            <p>
              <b>{clinic.name}</b>
            </p>
            <p>{clinic.street_number_and_name}</p>
            <p>
              {clinic.city}, {clinic.state}
            </p>
            <p>Phone: {clinic.phone_number}</p>
            <p>
              Support Groups?{" "}
              {clinic.support_groups === true ? (
                <input type={"checkbox"} checked></input>
              ) : (
                <input type={"checkbox"}></input>
              )}
            </p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clinics;
