// import React, { useState, useEffect } from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// // import ArticleDetails from "./components/ArticleDetails";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./pages/Dashboard"; // Protected page (e.g., Admin Panel)
// import Navbar from "./components/Navbar"; // Import the Navbar component

import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
