import React, { useEffect, useState } from "react";
import { fetchCategories } from "../services/api";
import "./CategoryList.css";

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error loading categories", error);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        <li className="category-item" onClick={() => onSelectCategory("")}>
          All
        </li>
        {categories.map((category) => (
          <li
            key={category._id}
            className="category-item"
            onClick={() => onSelectCategory(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
