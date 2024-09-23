import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Your backend URL

// Fetch all articles, optionally by search term or category
export const fetchArticles = async (searchTerm = "", category = "") => {
  try {
    const response = await axios.get(`${API_URL}/articles`, {
      params: { search: searchTerm, category },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching articles", error);
    throw error;
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};

// Register a new user
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, {
      name,
      email,
      password,
    });
    // Store JWT token in localStorage
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

// Login a user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    // Store JWT token in localStorage
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
};
