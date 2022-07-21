// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Clinics from "./Pages/Clinics";
import ClinicDetail from "./Pages/ClinicDetail";
import DeleteClinicForm from "./Components/DeleteClinicForm";
import Therapists from "./Pages/Therapists";
import TherapistDetail from "./Pages/TherapistDetail"
import SearchResults from "./Pages/SearchResults";
import Assessments from "./Pages/Assessments";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
  const [clinics, setClinics] = useState(null);
  const [therapists, setTherapists] = useState(null);
  const clinicurl = "https://therapyready-backend.herokuapp.com/clinics/";
  const therapisturl = "https://therapyready-backend.herokuapp.com/therapists/";
  // const { id } = useParams();
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


  if (!clinics && !therapists) return <h1>"No data rendered"</h1>;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home clinics={clinics} therapists={therapists} dataResults= {dataResults} handleResults={handleResults} /> } />
        <Route path="/about" element={<About />} />
        <Route path="/clinics" element={<Clinics clinics={clinics} />} />
        <Route path="/results" element={<SearchResults dataResults={dataResults} />} />
        <Route path="/clinics/:id" element={<ClinicDetail clinics={clinics} />} />
        <Route path="/therapists" element={ <Therapists therapists={therapists} /> } />
        <Route path="/therapists/:id" element={<TherapistDetail therapists={therapists} />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/addclinic" />
        <Route path="/updateclinic" />
        <Route path="/deleteclinic" element={<DeleteClinicForm deleteClinic={deleteClinic} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
