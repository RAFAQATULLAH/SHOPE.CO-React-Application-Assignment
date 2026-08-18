import React from "react";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination">

      <button className="pagination-prev">
        ← Previous
      </button>

      <div className="pagination-numbers">
        <button className="active-page">1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>8</button>
        <button>9</button>
        <button>10</button>
      </div>

      <button className="pagination-next">
        Next →
      </button>

    </div>
  );
}

export default Pagination;