import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Service from "./components/services-section/Service";
import './styles/fonts.css';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
    </div>
  );
}

export default App;