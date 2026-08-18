import React from "react";
import FilterSection from "./FilterSection";
import "./CategorySidebar.css";

function CategorySidebar() {
  const categories = [
    "T-shirts",
    "Shorts",
    "Shirts",
    "Hoodies",
    "Jeans",
  ];

  const dressStyles = [
    "Casual",
    "Formal",
    "Party",
    "Gym",
  ];

  const colors = [
    "#00A63C",
    "#E60023",
    "#FFD600",
    "#FF7A00",
    "#009FE3",
    "#7B2CBF",
    "#FF69B4",
    "#111111",
    "#AAAAAA",
    "#FFFFFF",
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <aside className="category-sidebar">
      <div className="sidebar-header">
        <h2>Filters</h2>
        <span>☷</span>
      </div>

      <FilterSection
        title="Category"
        items={categories}
      />

      {/* Price */}

      <div className="filter-section">
        <div className="filter-title">
          <h3>Price</h3>
          <span>⌃</span>
        </div>

        <div className="price-values">
          <span>$50</span>
          <span>$500</span>
        </div>

        <div className="price-slider">
          <div className="slider-track"></div>

          <div className="slider-progress"></div>

          <span className="slider-dot left"></span>
          <span className="slider-dot right"></span>
        </div>
      </div>

      {/* Colors */}

      <div className="filter-section">
        <div className="filter-title">
          <h3>Colors</h3>
          <span>⌃</span>
        </div>

        <div className="colors-grid">
          {colors.map((color, index) => (
            <button
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              aria-label={`Color ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Size */}

      <div className="filter-section">
        <div className="filter-title">
          <h3>Size</h3>
          <span>⌃</span>
        </div>

        <div className="sizes-grid">
          {sizes.map((size) => (
            <button key={size} className="size-option">
              {size}
            </button>
          ))}
        </div>
      </div>

      <FilterSection
        title="Dress Style"
        items={dressStyles}
      />

      <button className="apply-filter">
        Apply Filter
      </button>
    </aside>
  );
}

export default CategorySidebar;