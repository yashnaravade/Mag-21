import React, { useState } from "react";
import ArticleList from "../components/ArticleList";
import CategoryList from "../components/CategoryList";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <h1>Magazine Website</h1>
      <CategoryList onSelectCategory={handleSelectCategory} />
      <ArticleList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
