import React from "react";

function FilterSection({ title, items }) {
  return (
    <div className="filter-section">
      <div className="filter-title">
        <h3>{title}</h3>
        <span>›</span>
      </div>

      <div className="filter-items">
        {items.map((item) => (
          <button key={item} className="filter-item">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterSection;