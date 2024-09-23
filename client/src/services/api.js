import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Your backend URL

// Fetch all articles
// export const fetchArticles = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/articles`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching articles", error);
//     throw error;
//   }
// };

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
