import React from "react";
import "./Pagination.css";

<<<<<<< HEAD
function Pagination() {
  return (
    <div className="pagination">

      <button className="pagination-prev">
=======
function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
>>>>>>> de2a868 (Made backend and update cart and profile)
        ← Previous
      </button>

      <div className="pagination-numbers">
<<<<<<< HEAD
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

=======
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={`dots-${index}`}>...</span>
          ) : (
            <button
              key={page}
              className={currentPage === page ? "active-page" : ""}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="pagination-next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>
>>>>>>> de2a868 (Made backend and update cart and profile)
    </div>
  );
}

export default Pagination;