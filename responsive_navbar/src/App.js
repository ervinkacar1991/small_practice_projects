import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
