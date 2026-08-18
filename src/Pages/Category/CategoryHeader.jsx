import React from "react";
import "./CategoryHeader.css";

function CategoryHeader() {
  return (
    <>
      <div className="category-breadcrumb">
        <span>Home</span>
        <span className="breadcrumb-arrow">›</span>
        <span>Casual</span>
      </div>

      <div className="category-title">
        <h1>Casual</h1>
      </div>
    </>
  );
}

export default CategoryHeader;