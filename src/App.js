import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/index-page/Index";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";

function App() {
  const products = [
    {
      id: 1,
      name: "EHEIM External Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 2,
      name: "EHEIM Smart climate controller",
      description: "the device which controlls climate parameters",
      image: "featured2.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 299.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 3,
      name: "EHEIM Autofeeder",
      description: "autofeeder from EHEIM",
      image: "featured3.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 39.99000000000000198951966012828052043914794921875,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 4,
      name: "Sera Marine Granules Nature",
      description: "marine granules nature from Sera",
      image: "featured4.jpg",
      image2: "featured2.jpg",
      image3: "featured3.jpg",
      image4: "featured4.jpg",
      price: 5.9900000000000002131628207280300557613372802734375,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 5,
      name: "EHEIM Internal Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured2.jpg",
      image3: "featured3.jpg",
      image4: "featured4.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
  ];

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;