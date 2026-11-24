<<<<<<< HEAD
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ProductInfo.css";


const ProductInfo = ({product}) => {
  const {addToCart}  = useCart();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
=======

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import "./ProductInfo.css";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
>>>>>>> de2a868 (Made backend and update cart and profile)

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

<<<<<<< HEAD
=======
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

>>>>>>> de2a868 (Made backend and update cart and profile)
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

<<<<<<< HEAD
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

=======
  const handleAddToCart = () => {
    if (!product) return;

    dispatch(
      addToCart({
        product,
        size: selectedSize,
        color: selectedColor,
        quantity,
      })
    );

    setQuantity(1);
  };

  return (
    <div className="product-info">
      <h1>{product?.name || "ONE LIFE GRAPHIC T-SHIRT"}</h1>

      {/* Rating */}
      <div className="product-rating">
        <span className="stars">★ ★ ★ ★ ★</span>
        <span className="rating-number">
          {product?.rating || "4.5"}/5
        </span>
      </div>

      {/* Price */}
      <div className="product-price">
        <span className="current-price">
          ${product?.price ?? 260}
        </span>

        <s>$300</s>
        <span className="discount">-40%</span>
      </div>

      {/* Description */}
      <p className="product-description">
        {product?.description ||
          "This graphic t-shirt is perfect for any occasion. Crafted from high-quality cotton, it offers a comfortable fit and stylish look."}
      </p>

      <div className="product-divider" />

      {/* Colors */}
      <div className="product-option">
        <h3>Select Colors</h3>

        <div className="color-options">
          {colors.map((color) => (
            <button
              key={color}
              className={`color-button ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      </div>

      <div className="product-divider" />

      {/* Sizes */}
      <div className="product-option">
        <h3>Choose Size</h3>

        <div className="size-options">
>>>>>>> de2a868 (Made backend and update cart and profile)
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
<<<<<<< HEAD

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

=======
        </div>
      </div>

      <div className="product-divider" />

      {/* Quantity + Cart */}
      <div className="cart-actions">
        <div className="quantity-control">
          <button onClick={decreaseQuantity}>−</button>

          <span>{quantity}</span>

          <button onClick={increaseQuantity}>+</button>
        </div>

        <button
          className="add-cart-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
>>>>>>> de2a868 (Made backend and update cart and profile)
    </div>
  );
};

<<<<<<< HEAD
export default ProductInfo;
=======
export default ProductInfo;
>>>>>>> de2a868 (Made backend and update cart and profile)
