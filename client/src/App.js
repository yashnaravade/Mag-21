import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetails from "./components/ArticleDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard"; // Protected page (e.g., Admin Panel)

// Navigation Component
const Navigation = ({ isLoggedIn, handleLogout }) => (
  <nav>
    <a href="/">Home</a>
    {isLoggedIn ? (
      <>
        <a href="/dashboard">Dashboard</a>
        <button onClick={handleLogout}>Logout</button>
      </>
    ) : (
      <>
        <a href="/login">Login</a>
        <a href="/register">Sign Up</a>
      </>
    )}
  </nav>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Handle logout by removing token and updating state
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update state to reflect logout
  };

  // Keep user logged in across refreshes if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />} // Pass state updater
        />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />} // Pass state updater
        />
        {/* Protected route for authenticated users */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute element={<Dashboard />} isLoggedIn={isLoggedIn} />
          }
        />
      </Routes>
    </Router>
  );
};

// Protect specific routes (like Dashboard)
const ProtectedRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default App;
