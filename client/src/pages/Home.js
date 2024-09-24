import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard/NewsCard";

function Home() {
  const [news, setNews] = useState([]); // State to store fetched news articles

  const apiKey = "ff074bab818f4acfa3b2e8a910089e02"; // Replace with your actual News API key

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      );
      setNews(response.data.articles);
    };

    fetchNews();
  }, []); // Empty dependency array to fetch news only once on component mount

  return (
    <div className="news-feed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((article) => (
        <NewsCard key={article.url} article={article} />
      ))}
    </div>
  );
}
export default Home;
