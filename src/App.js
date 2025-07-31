import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode") || "light");

  useEffect(() => {
    document.body.style.backgroundColor = mode === "dark" ? "black" : "white";
    document.body.style.color = mode === "dark" ? "white" : "black";
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Router>
        <Navbar 
          title="TextUtils" 
          aboutUs="About" 
          mode={mode} 
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" />} />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
