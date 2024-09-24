import React, { useState } from "react";
import axios from "axios";

const Register = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        { name, email, password }
      );

      // Store the token and update login state
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true); // Update the state to indicate user is logged in
      // Redirect to home page or any other page
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn">
        Register
      </button>

      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;
