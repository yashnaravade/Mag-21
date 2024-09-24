import axios from "axios";

const NEWS_API_KEY = "ff074bab818f4acfa3b2e8a910089e02"; // Your API key
const BASE_URL = "https://newsapi.org/v2";

// Fetch news by keyword (and optional date)
export const fetchNewsByKeyword = async (
  keyword,
  from = "2024-09-24",
  sortBy = "popularity"
) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        apiKey: NEWS_API_KEY,
        q: keyword, // Search keyword, like 'Apple'
        from, // Starting date (YYYY-MM-DD format)
        sortBy, // Popularity, relevancy, etc.
      },
    });
    return response.data.articles; // Return articles array
  } catch (error) {
    console.error("Error fetching news", error);
    throw error;
  }
};
