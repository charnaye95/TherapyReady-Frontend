// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Clinics from "./Pages/Clinics";
import ClinicDetail from "./Pages/ClinicDetail";
import CreateClinicForm from "./Components/CreateClinicForm";
import UpdateClinicForm from "./Components/UpdateClinicForm";
import DeleteClinicForm from "./Components/DeleteClinicForm";
import Therapists from "./Pages/Therapists";
import TherapistDetail from "./Pages/TherapistDetail";
import CreateTherapistForm from "./Components/CreateTherapistForm";
import UpdateTherapistForm from "./Components/UpdateTherapistForm";
import DeleteTherapistForm from "./Components/DeleteTherapistForm";
import SearchResults from "./Pages/SearchResults";
import Assessments from "./Pages/Assessments";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  const [clinics, setClinics] = useState(null);
  const [therapists, setTherapists] = useState(null);
  const clinicUrl = "https://therapyready-backend.herokuapp.com/clinics/";
  const therapistUrl = "https://therapyready-backend.herokuapp.com/therapists/";
  // const { id } = useParams();
  // const navigate = useNavigate();

  const getClinics = () => {
    axios.get(clinicUrl)
      .then((res) => setClinics(res.data))
      .catch(console.error);
  }

  const getTherapists = () => {
    axios.get(therapistUrl)
      .then((res) => setTherapists(res.data))
      .catch(console.error);
  }

  //in progress delete function
  // const deleteClinic = async (id) => {
  //   await axios.delete(
  //     `https://therapyready-backend.herokuapp.com/clinics/${id}`
  //   );
  //   navigate("/clinics");
  // };

  useEffect(() => {
    getClinics();
    getTherapists();
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


  if (!clinics && !therapists) return <h1>"No data rendered"</h1>;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home clinics={clinics} therapists={therapists} dataResults={dataResults} handleResults={handleResults} />} />
        <Route path="/about" element={<About />} />
        <Route path="/clinics" element={<Clinics clinics={clinics} />} />
        <Route path="/clinics/:id" element={<ClinicDetail />} />
        <Route path="/therapists" element={<Therapists therapists={therapists} />} />
        <Route path="/therapists/:id" element={<TherapistDetail />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/results" element={<SearchResults dataResults={dataResults} />} />
        <Route path="/clinics/create" element={<CreateClinicForm clinicUrl={clinicUrl} />} />
        <Route path="/clinics/:id/update" element={<UpdateClinicForm />} />
        <Route path="/clinics/:id/delete" element={<DeleteClinicForm />} />
        <Route path="/therapists/create" element={<CreateTherapistForm therapistUrl={therapistUrl} clinics={clinics} />} />
        <Route path="/therapists/:id/update" element={<UpdateTherapistForm />} />
        <Route path="/therapists/:id/delete" element={<DeleteTherapistForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
