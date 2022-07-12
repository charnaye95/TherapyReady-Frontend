import React from 'react'

function Therapists({therapists}) {
  return (
    <div>
        <p>{therapists.map(therapist =>
      <div>
         {therapist.name} 
         </div>
         )}</p>
    </div>
  )
}

export default Therapists