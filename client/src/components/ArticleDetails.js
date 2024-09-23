import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ArticleDetails.css";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/articles/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article", error);
      }
    };
    getArticle();
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>
        <strong>Author:</strong> {article.author}
      </p>
      <p>
        <strong>Published:</strong>{" "}
        {new Date(article.publishedDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ArticleDetails;
