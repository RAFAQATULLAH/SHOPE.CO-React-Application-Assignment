import Hero from "../../assets/heroimg.jpg";
import "./productcard.css";
import { StarIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Card({ Products }) {
  return (
    <div className="product-grid">

      {Products.map((p) => (
        <Link
          to={`/product/${p.id}`}
          className="product-card-link"
          key={p.id}
        >

          <div className="product-card">

            <div className="p-img">
              <img src={Hero} alt={p.name} />
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