import "./productcard.css";
import { StarIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Card({Products}) {
  return (
    <div className="product-grid">

      {Products.map((p) => (
        <Link
<<<<<<< HEAD
          to={`/product/${p.id}`}
          className="product-card-link"
          key={p.id}
=======
          to={`/product/${p._id}`}
          className="product-card-link"
          key={p._id}
>>>>>>> de2a868 (Made backend and update cart and profile)
        >

          <div className="product-card">

            <div className="p-img">
<<<<<<< HEAD
              <img src={p.images.img1} alt={p.name} />
=======
              <img src={p.images?.img1} alt={p.name} />
>>>>>>> de2a868 (Made backend and update cart and profile)
            </div>

            <div className="p-heading">
              <h1>{p.name}</h1>
            </div>

            <div className="p-rating">

              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  size={14}
                  className={
                    star <= Math.round(p.rating)
                      ? "star-filled"
                      : "star-empty"
                  }
                />
              ))}

              <span>{p.rating}/5</span>

            </div>

            <div className="p-price">
              <p>
                ${p.price}

                {p.originalPrice && (
                  <>
                    {" "}
                    <s>${p.originalPrice}</s>{" "}
                    -{p.discount}%
                  </>
                )}
              </p>
            </div>

          </div>

        </Link>
      ))}

    </div>
  );
}

export default Card;