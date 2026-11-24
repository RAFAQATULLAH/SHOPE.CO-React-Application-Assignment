
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";

import "./CartItem.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const productId = item.id || item._id;

  const handleRemove = () => {
    dispatch(
      removeFromCart({
        id: productId,
        size: item.size,
        color: item.color,
      })
    );
  };

  const handleIncrease = () => {
    dispatch(
      increaseQuantity({
        id: productId,
        size: item.size,
        color: item.color,
      })
    );
  };

  const handleDecrease = () => {
    dispatch(
      decreaseQuantity({
        id: productId,
        size: item.size,
        color: item.color,
      })
    );
  };

  return (
    <div className="cart-item">

      {/* Product Image */}
      <div className="cart-item-image">
        <img
          src={item.images?.img1 || "/placeholder.png"}
          alt={item.name}
        />
      </div>

      {/* Product Information */}
      <div className="cart-item-info">
        <h2>{item.name}</h2>

        <p>
          Size: <span>{item.size}</span>
        </p>

        <p>
          Color: <span>{item.color}</span>
        </p>

        <strong>
          ${Number(item.price).toLocaleString()}
        </strong>
      </div>

      {/* Right Side */}
      <div className="cart-item-right">

        <button
          className="delete-cart-item"
          onClick={handleRemove}
          aria-label="Remove product"
        >
          <Trash2 size={16} />
        </button>

        <div className="quantity-control">

          <button
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            <Minus size={15} />
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            <Plus size={15} />
          </button>

        </div>
      </div>

    </div>
  );
}

export default CartItem;
