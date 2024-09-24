import React from "react";
import "./NewsCard.css";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-card-image"
      />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more"
      >
        Read More
      </a>
    </div>
  );
}

export default NewsCard;
