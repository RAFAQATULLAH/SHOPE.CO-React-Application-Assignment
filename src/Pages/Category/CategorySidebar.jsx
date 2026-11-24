<<<<<<< HEAD
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
=======

import React from "react";
import "./CategorySidebar.css";

function CategorySidebar({
  sizes = [],
  colors = [],
  selectedSize,
  selectedColor,
  minPrice,
  maxPrice,
  onSizeChange,
  onColorChange,
  onMinPriceChange,
  onMaxPriceChange,
  onClearFilters,
}) {
  // Convert color names or hex values into CSS colors
  const getColorValue = (color) => {
    const colorMap = {
      black: "#111111",
      white: "#FFFFFF",
      red: "#E60023",
      blue: "#009FE3",
      green: "#00A63C",
      yellow: "#FFD600",
      pink: "#FF69B4",
      gray: "#AAAAAA",
      grey: "#AAAAAA",
      brown: "#8B4513",
      purple: "#7B2CBF",
    };

    const normalizedColor = color.toLowerCase();

    if (/^#[0-9a-f]{3,8}$/i.test(color)) {
      return color;
    }

    return colorMap[normalizedColor] || color;
  };
>>>>>>> de2a868 (Made backend and update cart and profile)

  return (
    <aside className="category-sidebar">
      <div className="sidebar-header">
        <h2>Filters</h2>
        <span>☷</span>
      </div>

<<<<<<< HEAD
      <FilterSection
        title="Category"
        items={categories}
      />

      {/* Price */}

=======
      {/* Price Filter */}
>>>>>>> de2a868 (Made backend and update cart and profile)
      <div className="filter-section">
        <div className="filter-title">
          <h3>Price</h3>
          <span>⌃</span>
        </div>

        <div className="price-values">
<<<<<<< HEAD
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

=======
          <input
            type="number"
            placeholder="Min"
            min="0"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            aria-label="Minimum price"
          />

          <input
            type="number"
            placeholder="Max"
            min="0"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            aria-label="Maximum price"
          />
        </div>
      </div>

      {/* Color Filter */}
>>>>>>> de2a868 (Made backend and update cart and profile)
      <div className="filter-section">
        <div className="filter-title">
          <h3>Colors</h3>
          <span>⌃</span>
        </div>

        <div className="colors-grid">
<<<<<<< HEAD
          {colors.map((color, index) => (
            <button
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              aria-label={`Color ${index + 1}`}
=======
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              className={`color-option ${
                selectedColor === color ? "selected-color" : ""
              }`}
              style={{
                backgroundColor: getColorValue(color),
              }}
              onClick={() =>
                onColorChange(
                  selectedColor === color ? "" : color
                )
              }
              aria-label={color}
              title={color}
              aria-pressed={selectedColor === color}
>>>>>>> de2a868 (Made backend and update cart and profile)
            />
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Size */}

=======
      {/* Size Filter */}
>>>>>>> de2a868 (Made backend and update cart and profile)
      <div className="filter-section">
        <div className="filter-title">
          <h3>Size</h3>
          <span>⌃</span>
        </div>

        <div className="sizes-grid">
          {sizes.map((size) => (
<<<<<<< HEAD
            <button key={size} className="size-option">
=======
            <button
              key={size}
              type="button"
              className={`size-option ${
                selectedSize === size ? "selected-size" : ""
              }`}
              onClick={() =>
                onSizeChange(
                  selectedSize === size ? "" : size
                )
              }
              aria-pressed={selectedSize === size}
            >
>>>>>>> de2a868 (Made backend and update cart and profile)
              {size}
            </button>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      <FilterSection
        title="Dress Style"
        items={dressStyles}
      />

      <button className="apply-filter">
        Apply Filter
=======
      <button
        type="button"
        className="apply-filter"
        onClick={onClearFilters}
      >
        Clear Filters
>>>>>>> de2a868 (Made backend and update cart and profile)
      </button>
    </aside>
  );
}

<<<<<<< HEAD
export default CategorySidebar;
=======
export default CategorySidebar;
>>>>>>> de2a868 (Made backend and update cart and profile)
