
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

  return (
    <aside className="category-sidebar">
      <div className="sidebar-header">
        <h2>Filters</h2>
        <span>☷</span>
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <div className="filter-title">
          <h3>Price</h3>
          <span>⌃</span>
        </div>

        <div className="price-values">
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
      <div className="filter-section">
        <div className="filter-title">
          <h3>Colors</h3>
          <span>⌃</span>
        </div>

        <div className="colors-grid">
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
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="filter-section">
        <div className="filter-title">
          <h3>Size</h3>
          <span>⌃</span>
        </div>

        <div className="sizes-grid">
          {sizes.map((size) => (
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
              {size}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="apply-filter"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </aside>
  );
}

export default CategorySidebar;
