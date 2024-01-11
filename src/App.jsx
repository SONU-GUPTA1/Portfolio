import "./App.css";
import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Services from "./Pages/Services"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Header from "./Components/Header";


function App() {

  return (
    <>
      <BrowserRouter>
      <div className="App">
      <Header />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
      </div>
      
      </BrowserRouter>
    </>
  )
}

export default App
