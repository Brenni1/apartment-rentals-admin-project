import "./App.css";
import "./components/Navbar.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { List } from "./components/List.jsx";
import { Route, Routes } from "react-router-dom";
import { ApartmentDetailsPage } from "./pages/ApartmentDetailsPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { useState } from "react";
import rentalData from "./assets/rentals.json";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { AddApartment } from "./components/AddApartment.jsx";
function App() {
  const [apartmentData, setApartmentData] = useState(rentalData);

  return (
    <div>
      <Sidebar></Sidebar>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<List apartmentData={apartmentData} setApartmentData={setApartmentData} />} />
        <Route path="/apartments/:id" element={<ApartmentDetailsPage apartmentData={apartmentData} />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/addApartment" element={<AddApartment apartmentData={apartmentData} setApartmentData={setApartmentData} />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
