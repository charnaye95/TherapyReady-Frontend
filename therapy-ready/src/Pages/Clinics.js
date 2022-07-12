import React from 'react'

function Clinics({clinics}) {
  return (
    <div>
    <p>{clinics.map(clinic => 
        <div>
          {clinic.name} 
          
        </div>)}
        </p>  
        </div>
)}

export default Clinics