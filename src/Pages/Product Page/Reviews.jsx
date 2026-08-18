import React from "react";

import "./Reviews.css";

const reviews = [
  {
    name: "Samantha D.",
    rating: 5,
    date: "August 14, 2023",
    text: "I absolutely love this shirt! The design is unique and the fabric feels really comfortable. It's even better in person.",
  },
  {
    name: "Alex M.",
    rating: 5,
    date: "August 15, 2023",
    text: "The quality exceeded my expectations. The material is soft and the fit is exactly what I wanted.",
  },
  {
    name: "Ethan R.",
    rating: 4,
    date: "August 16, 2023",
    text: "Great shirt with a really nice graphic. The fabric is comfortable and the overall quality is impressive.",
  },
  {
    name: "Olivia P.",
    rating: 5,
    date: "August 16, 2023",
    text: "Absolutely love this shirt! It fits perfectly and looks even better than the pictures.",
  },
  {
    name: "Liam K.",
    rating: 4,
    date: "August 17, 2023",
    text: "The shirt is comfortable and stylish. The fabric feels soft and the design looks great.",
  },
  {
    name: "Anna L.",
    rating: 5,
    date: "August 17, 2023",
    text: "This is one of my favorite purchases. Great quality, comfortable fit and beautiful design.",
  },
];


const ReviewCard = ({ review }) => {
  return (
    <article className="review-card">

      <div className="review-top">

        <div className="review-stars">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>

        <button className="review-menu">
          ...
        </button>

      </div>


      <div className="review-name">

        <span>{review.name}</span>

        <span className="review-verified">
          ✓
        </span>

      </div>


      <p className="review-text">
        "{review.text}"
      </p>


      <p className="review-date">
        Posted on {review.date}
      </p>

    </article>
  );
};


const Reviews = () => {
  return (
    <section className="reviews">

      {/* Review header */}

      <div className="reviews-header">

        <div className="reviews-title">
          <h2>All Reviews</h2>

          <span>(451)</span>
        </div>


        <div className="reviews-actions">

          <button className="filter-button">
            ☷
          </button>

          <button className="sort-button">
            Latest
            <span>⌄</span>
          </button>

          <button className="write-review-button">
            Write a Review
          </button>

        </div>

      </div>


      {/* Reviews */}

      <div className="reviews-grid">

        {reviews.map((review, index) => (
          <ReviewCard
            review={review}
            key={index}
          />
        ))}

      </div>


      {/* Load more */}

      <button className="load-more">
        Load More Reviews
      </button>

    </section>
  );
};

export default Reviews;