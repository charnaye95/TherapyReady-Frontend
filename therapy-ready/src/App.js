// import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Clinics from './Pages/Clinics';
import Therapists from './Pages/Therapists';
// import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

function App() {

  const [clinics, setClinics] = useState(null)
  const [therapists, setTherapists] = useState(null)
  const clinicurl = "https://therapyready-backend.herokuapp.com/clinics/"
  const therapisturl = "https://therapyready-backend.herokuapp.com/therapists/"

  function getClinics() {
    axios.get(clinicurl)
      .then((res) => setClinics(res.data))
      .catch(console.error);
  }

  function getTherapists() {
    axios.get(therapisturl)
      .then((res) => setTherapists(res.data))
      .catch(console.error);

  }

  useEffect(() => {
    getClinics()
    getTherapists()
  }, [])

  if (!clinics && !therapists) return <h1>"No data rendered"</h1>

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/therapists" element={<Therapists />} />
      </Routes>
      <p>{clinics.map(clinic => 
      <div>
        {clinic.name} 
        
      </div>)}
      </p>
      <br></br>
      <p>{therapists.map(therapist =>
      <div>
         {therapist.name} 
         </div>
         )}</p>
    </div>
  );
}

export default App;
