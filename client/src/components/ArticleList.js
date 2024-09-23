import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/api";
import "./ArticleList.css";
import { Link } from "react-router-dom";

const ArticleList = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles(searchTerm, selectedCategory);
        setArticles(data);
      } catch (error) {
        console.error("Error loading articles", error);
      }
    };
    getArticles();
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    // <div className="article-list">
    //   <h2>Articles</h2>
    //   <input
    //     type="text"
    //     placeholder="Search articles..."
    //     value={searchTerm}
    //     onChange={handleSearchChange}
    //     className="search-input"
    //   />
    //   <div className="article-grid">
    //     {articles.map((article) => (
    //       <div className="article-card" key={article._id}>
    //         <h3>{article.title}</h3>
    //         <p>{article.content.substring(0, 100)}...</p>
    //         <p>
    //           <strong>Author:</strong> {article.author}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="article-grid">
      {articles.map((article) => (
        <div className="article-card" key={article._id}>
          <h3>{article.title}</h3>
          <p>{article.content.substring(0, 100)}...</p>
          <p>
            <strong>Author:</strong> {article.author}
          </p>
          <Link to={`/articles/${article._id}`} className="read-more">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
