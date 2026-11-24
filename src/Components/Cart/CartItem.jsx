<<<<<<< HEAD
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

import { useCart } from "../../context/CartContext";
=======

import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";
>>>>>>> de2a868 (Made backend and update cart and profile)

import "./CartItem.css";

function CartItem({ item }) {
<<<<<<< HEAD
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
=======
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
>>>>>>> de2a868 (Made backend and update cart and profile)

  return (
    <div className="cart-item">

      {/* Product Image */}
<<<<<<< HEAD

      <div className="cart-item-image">
        <img
          src={item.images.img1}
=======
      <div className="cart-item-image">
        <img
          src={item.images?.img1 || "/placeholder.png"}
>>>>>>> de2a868 (Made backend and update cart and profile)
          alt={item.name}
        />
      </div>

      {/* Product Information */}
<<<<<<< HEAD

      <div className="cart-item-info">

=======
      <div className="cart-item-info">
>>>>>>> de2a868 (Made backend and update cart and profile)
        <h2>{item.name}</h2>

        <p>
          Size: <span>{item.size}</span>
        </p>

        <p>
          Color: <span>{item.color}</span>
        </p>

        <strong>
<<<<<<< HEAD
          ${item.price}
        </strong>

      </div>

      {/* Right Side */}

=======
          ${Number(item.price).toLocaleString()}
        </strong>
      </div>

      {/* Right Side */}
>>>>>>> de2a868 (Made backend and update cart and profile)
      <div className="cart-item-right">

        <button
          className="delete-cart-item"
<<<<<<< HEAD
          onClick={() =>
            removeFromCart(
              item.id,
              item.size,
              item.color
            )
          }
=======
          onClick={handleRemove}
          aria-label="Remove product"
>>>>>>> de2a868 (Made backend and update cart and profile)
        >
          <Trash2 size={16} />
        </button>

        <div className="quantity-control">

          <button
<<<<<<< HEAD
            onClick={() =>
              decreaseQuantity(
                item.id,
                item.size,
                item.color
              )
            }
=======
            onClick={handleDecrease}
            aria-label="Decrease quantity"
>>>>>>> de2a868 (Made backend and update cart and profile)
          >
            <Minus size={15} />
          </button>

          <span>{item.quantity}</span>

          <button
<<<<<<< HEAD
            onClick={() =>
              increaseQuantity(
                item.id,
                item.size,
                item.color
              )
            }
=======
            onClick={handleIncrease}
            aria-label="Increase quantity"
>>>>>>> de2a868 (Made backend and update cart and profile)
          >
            <Plus size={15} />
          </button>

        </div>
<<<<<<< HEAD

=======
>>>>>>> de2a868 (Made backend and update cart and profile)
      </div>

    </div>
  );
}

<<<<<<< HEAD
export default CartItem;
=======
export default CartItem;
>>>>>>> de2a868 (Made backend and update cart and profile)
