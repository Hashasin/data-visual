import "./App.css";
import MainBody from "./Home/MainBody/MainBody";
import Navbar from "./Home/Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFound from "./Home/NotFound/NotFound";
import FilterWithTopic from "./Home/FilteredData/FilterWithTopic/FilterWithTopic";
import FilterWithCountry from "./Home/FilteredData/FilterWithCountry/FilterWithCountry";
import FilterWithRegion from "./Home/FilteredData/FilterWithRegion/FilterWithRegion";
import FilterWithSource from "./Home/FilteredData/FilterWithSource/FilterWithSource";
import FilterWithSector from "./Home/FilteredData/FilterWithSector/FilterWithSector";
import FilterWithPestle from "./Home/FilteredData/FilterWithPestle/FilterWithPestle";
import FilterWithCity from "./Home/FilteredData/FilterWithCity/FilterWithCity";
import FilterWithEndYear from "./Home/FilteredData/FilterWithEndYear/FilterWithEndYear";
import AddNewData from "./Home/AddNewData/AddNewData";
import DeleteData from "./Home/DeleteData/DeleteData";

function App() {
  return (
    <Router>
     
      <Navbar />
      <Routes>
    
        <Route path="/" element={<MainBody />} />

        <Route path="/notFound" element={<NotFound />} />

        <Route path="/topic" element={<FilterWithTopic />} />

        <Route path="/country" element={<FilterWithCountry />} />

        <Route path="/region" element={<FilterWithRegion />} />

        <Route path="/source" element={<FilterWithSource />} />

        <Route path="/sector" element={<FilterWithSector />} />

        <Route path="/pestle" element={<FilterWithPestle />} />

        <Route path="/city" element={<FilterWithCity />} />

        <Route path="/endYear" element={<FilterWithEndYear />} />

        <Route path="/addNewData" element={<AddNewData />} />

        <Route path="/deleteData" element={<DeleteData />} />
      </Routes>
    </Router>
  );
}

export default App;
