import React from 'react'
import { useParams } from 'react-router-dom';

function ClinicDetail({clinics}) {
    const id = useParams()
    const clinic = clinics[id];
    console.log(clinic)
  return (
    <div>
        ClinicDetail
    <div>
{clinic} 
</div>
 </div>
 )
}

export default ClinicDetail