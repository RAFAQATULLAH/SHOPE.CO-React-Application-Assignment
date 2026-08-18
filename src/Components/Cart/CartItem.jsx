import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "../../context/CartContext";

import "./CartItem.css";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="cart-item">

      {/* Product Image */}

      <div className="cart-item-image">
        <img
          src={item.image}
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
          ${item.price}
        </strong>

      </div>

      {/* Right Side */}

      <div className="cart-item-right">

        <button
          className="delete-cart-item"
          onClick={() =>
            removeFromCart(
              item.id,
              item.size,
              item.color
            )
          }
        >
          <Trash2 size={16} />
        </button>

        <div className="quantity-control">

          <button
            onClick={() =>
              decreaseQuantity(
                item.id,
                item.size,
                item.color
              )
            }
          >
            <Minus size={15} />
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              increaseQuantity(
                item.id,
                item.size,
                item.color
              )
            }
          >
            <Plus size={15} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default CartItem;