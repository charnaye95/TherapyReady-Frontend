// import logo from './logo.svg';
import './App.css';
import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {

  const [clinics, setClinics] = useState(null)
  const [therapists, setTherapists] = useState(null)
  const clinicurl = "https://therapyready-backend.herokuapp.com/clinics/"
  const therapisturl = "https://therapyready-backend.herokuapp.com/therapists/"

  function getClinics() {
    fetch(clinicurl)
      .then((res) => res.json())
      .then((res) => setClinics(res))
      .catch(console.error);
  }

  useEffect(() => {
    getClinics()
  }, [])

  return (
    <div className="App">
       Hello World
      {clinics}
    </div>
  );
}

export default App;
