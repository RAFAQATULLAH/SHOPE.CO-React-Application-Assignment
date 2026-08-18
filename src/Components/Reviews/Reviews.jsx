import React from "react";
import "./Reviews.css";

const testimonials = [
  {
    name: "Sarah M.",
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    name: "Alex K.",
    text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`,
  },
  {
    name: "James L.",
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
  },
  {
    name: "Moe H.",
    text: `"Shop.co has completely changed the way I shop for clothes. The quality is excellent and the styles are always fresh and modern."`,
  },
];

const StarRating = () => {
  return (
    <div className="testimonial-stars" aria-label="5 star rating">
      ★ ★ ★ ★ ★
    </div>
  );
};

const HappyCustomers = () => {
  return (
    <section className="customers">
      <div className="customers__header">
        <h2>OUR HAPPY CUSTOMERS</h2>

        <div className="customers__arrows">
          <button aria-label="Previous testimonial">←</button>
          <button aria-label="Next testimonial">→</button>
        </div>
      </div>

      <div className="customers__slider">
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-card" key={index}>
            <StarRating />

            <div className="testimonial-name">
              <span>{testimonial.name}</span>
              <span className="verified">✓</span>
            </div>

            <p>{testimonial.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomers;