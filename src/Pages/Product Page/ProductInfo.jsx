import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ProductInfo.css";

const ProductInfo = () => {
  const {addToCart}  = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    "#5c5237",
    "#164b48",
    "#272d54",
  ];

  const sizes = [
    "Small",
    "Medium",
    "Large",
    "X-Large",
  ];

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="product-info">

      <h1>ONE LIFE GRAPHIC T-SHIRT</h1>


      {/* Rating */}

      <div className="product-rating">

        <span className="stars">
          ★ ★ ★ ★ ★
        </span>

        <span className="rating-number">
          4.5/5
        </span>

      </div>


      {/* Price */}

      <div className="product-price">

        <span className="current-price">
          $260
        </span>

        <s>$300</s>

        <span className="discount">
          -40%
        </span>

      </div>


      {/* Description */}

      <p className="product-description">
        This graphic t-shirt is perfect for any occasion.
        Crafted from high-quality cotton, it offers a
        comfortable fit and stylish look.
      </p>


      {/* Divider */}

      <div className="product-divider" />


      {/* Colors */}

      <div className="product-option">

        <h3>Select Colors</h3>

        <div className="color-options">

          {colors.map((color, index) => (
            <button
              key={color}
              className={`color-button ${
                selectedColor === index ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(index)}
              aria-label={`Color ${index + 1}`}
            />
          ))}

        </div>

      </div>


      <div className="product-divider" />


      {/* Sizes */}

      <div className="product-option">

        <h3>Choose Size</h3>

        <div className="size-options">

          {sizes.map((size) => (
            <button
              key={size}
              className={`size-button ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}

        </div>

      </div>


      <div className="product-divider" />


      {/* Quantity + cart */}

      <div className="cart-actions">

        <div className="quantity-control">

          <button onClick={decreaseQuantity}>
            −
          </button>

          <span>{quantity}</span>

          <button onClick={increaseQuantity}>
            +
          </button>

        </div>

        <button className="add-cart-button" onClick={() =>
    addToCart(product, selectedSize, selectedColor)
  }>
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductInfo;