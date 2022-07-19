// import logo from './logo.svg';
import './App.css';
// import './index.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Clinics from './Pages/Clinics';
import Therapists from './Pages/Therapists';
import Assessments from './Pages/Assessments';
import DeleteClinic from "./Components/DeleteClinic";
import Footer from './Components/Footer';
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

  const [open, setOpen] = useState(false)


  if (!clinics && !therapists) return <h1>"No data rendered"</h1>


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home clinics={clinics} therapists={therapists}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/clinics" element={<Clinics clinics={clinics} />} />
        <Route path="/therapists" element={<Therapists therapists={therapists} />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/addclinic" />
        <Route path="/updateclinic" />
        <Route path="/deleteclinic" element={<DeleteClinic open={open} setOpen={setOpen} />}   />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
