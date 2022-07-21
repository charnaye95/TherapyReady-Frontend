// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Clinics from "./Pages/Clinics";
import Therapists from "./Pages/Therapists";
import Assessments from "./Pages/Assessments";
import DeleteClinicForm from "./Components/DeleteClinicForm";
import Footer from "./Components/Footer";
import axios from "axios";
import ClinicDetail from "./Pages/ClinicDetail";
import SearchResults from "./Pages/SearchResults";

function App() {
  const [clinics, setClinics] = useState(null);
  const [therapists, setTherapists] = useState(null);
  const clinicurl = "https://therapyready-backend.herokuapp.com/clinics/";
  const therapisturl = "https://therapyready-backend.herokuapp.com/therapists/";
  const { id } = useParams();
  const navigate = useNavigate();

  function getClinics() {
    axios
      .get(clinicurl)
      .then((res) => setClinics(res.data))
      .catch(console.error);
  }

  function getTherapists() {
    axios
      .get(therapisturl)
      .then((res) => setTherapists(res.data))
      .catch(console.error);
  }

  const deleteClinic = async (id) => {
    await axios.delete(
      `https://therapyready-backend.herokuapp.com/clinics/${id}`
    );
    navigate("/clinics");
  };

  useEffect(() => {
    getClinics();
    getTherapists();
    // deleteClinic();
  }, []);

  //Searchbar functionality
  const combined = clinics?.concat(therapists && therapists);
  console.log(combined);

  const [dataResults, setDataResults] = useState([]);

  const handleResults = (event) => {
    const searchString = event.target.value;
    const newData = combined.filter((value) => {
      return value.city.toLowerCase().includes(searchString.toLowerCase());
    });
    setDataResults(newData);
    console.log(searchString);
  };
  //clinic search
  // const [clinicResults, setClinicResults] = useState([]);

  // const handleClinicResults = (event) => {
  //   const searchString = event.target.value;
  //   const newData = clinics.filter((value) => {
  //     return value.city.toLowerCase().includes(searchString.toLowerCase());
  //   });
  //   setClinicResults(newData);
  //   console.log(searchString);
  // };
  //therapist search
  // const [therapistResults, setTherapistResults] = useState([]);

  // const handleTherapistResults = (event) => {
  //   const searchString = event.target.value;
  //   const newData = therapists.filter((value) => {
  //     return value.city.toLowerCase().includes(searchString.toLowerCase());
  //   });
  //   setTherapistResults(newData);
  //   console.log(searchString);
  // };

  if (!clinics && !therapists) return <h1>"No data rendered"</h1>;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              clinics={clinics}
              therapists={therapists}
              dataResults={dataResults}
              handleResults={handleResults}
              // clinicResults={clinicResults}
              // handleClinicResults={handleClinicResults}
              // therapistResults={therapistResults}
              // handleTherapistResults={handleTherapistResults}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/clinics"
          element={<Clinics clinics={clinics} dataResults={dataResults} 
          // clinicResults={clinicResults} 
          />}
        />
        <Route
          path="/results"
          element={<SearchResults dataResults={dataResults} 
          // clinicResults={clinicResults} 
          />}
        />
        <Route path="/clinics/:id" element={<ClinicDetail id={id} clinics={clinics} />} />
        <Route
          path="/therapists"
          element={
            <Therapists therapists={therapists} dataResults={dataResults} 
            // therapistResults={therapistResults} 
            />
          }
        />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/addclinic" />
        <Route path="/updateclinic" />
        <Route
          path="/deleteclinic"
          element={<DeleteClinicForm deleteClinic={deleteClinic} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
