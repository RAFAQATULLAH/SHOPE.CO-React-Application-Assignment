<<<<<<< HEAD
import React, { useState } from "react";
import { Tag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";
=======

import React, { useState } from "react";
import { Tag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCartSubtotal,
} from "../../redux/slices/cartSlice";
>>>>>>> de2a868 (Made backend and update cart and profile)

import "./OrderSummary.css";

function OrderSummary() {
<<<<<<< HEAD
  const { subtotal } = useCart();
=======
  const subtotal = useSelector(selectCartSubtotal);
>>>>>>> de2a868 (Made backend and update cart and profile)

  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState("");
<<<<<<< HEAD
  const [discount, setDiscount] = useState(0);
=======
  const [promoApplied, setPromoApplied] = useState(false);
>>>>>>> de2a868 (Made backend and update cart and profile)
  const [promoMessage, setPromoMessage] = useState("");

  const deliveryFee = 15;

<<<<<<< HEAD
  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SAVE20") {
      const discountAmount = subtotal * 0.2;

      setDiscount(discountAmount);
      setPromoMessage("Promo applied!");
    } else {
      setDiscount(0);
=======
  const discount = promoApplied ? subtotal * 0.2 : 0;

  const total = subtotal - discount + deliveryFee;

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SAVE20") {
      setPromoApplied(true);
      setPromoMessage("Promo applied!");
    } else {
      setPromoApplied(false);
>>>>>>> de2a868 (Made backend and update cart and profile)
      setPromoMessage("Invalid promo code");
    }
  };

<<<<<<< HEAD
  const total = subtotal - discount + deliveryFee;

=======
>>>>>>> de2a868 (Made backend and update cart and profile)
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="order-summary">

      <h2>Order Summary</h2>

      {/* Subtotal */}
<<<<<<< HEAD

      <div className="summary-row">
        <span>Subtotal</span>

        <strong>
          ${subtotal.toFixed(0)}
        </strong>
      </div>

      {/* Discount */}

      <div className="summary-row">
        <span>Discount (-20%)</span>

=======
      <div className="summary-row">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(0)}</strong>
      </div>

      {/* Discount */}
      <div className="summary-row">
        <span>Discount (-20%)</span>
>>>>>>> de2a868 (Made backend and update cart and profile)
        <strong className="discount-value">
          -${discount.toFixed(0)}
        </strong>
      </div>

      {/* Delivery */}
<<<<<<< HEAD

      <div className="summary-row">
        <span>Delivery Fee</span>

        <strong>
          ${deliveryFee}
        </strong>
      </div>

      {/* Divider */}

      <div className="summary-divider"></div>

      {/* Total */}

      <div className="summary-total">
        <span>Total</span>

        <strong>
          ${total.toFixed(0)}
        </strong>
      </div>

      {/* Promo */}

      <div className="promo-container">

        <div className="promo-input">

=======
      <div className="summary-row">
        <span>Delivery Fee</span>
        <strong>${deliveryFee}</strong>
      </div>

      <div className="summary-divider"></div>

      {/* Total */}
      <div className="summary-total">
        <span>Total</span>
        <strong>${total.toFixed(0)}</strong>
      </div>

      {/* Promo Code */}
      <div className="promo-container">
        <div className="promo-input">
>>>>>>> de2a868 (Made backend and update cart and profile)
          <Tag size={18} />

          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
<<<<<<< HEAD
            onChange={(e) =>
              setPromoCode(e.target.value)
            }
          />

=======
            onChange={(e) => setPromoCode(e.target.value)}
          />
>>>>>>> de2a868 (Made backend and update cart and profile)
        </div>

        <button onClick={applyPromo}>
          Apply
        </button>
<<<<<<< HEAD

      </div>

      {promoMessage && (
        <p
          className={
            discount > 0
              ? "promo-success"
              : "promo-error"
          }
        >
=======
      </div>

      {promoMessage && (
        <p className={promoApplied ? "promo-success" : "promo-error"}>
>>>>>>> de2a868 (Made backend and update cart and profile)
          {promoMessage}
        </p>
      )}

      {/* Checkout */}
<<<<<<< HEAD

=======
>>>>>>> de2a868 (Made backend and update cart and profile)
      <button
        className="checkout-button"
        onClick={handleCheckout}
      >
        <span>Go to Checkout</span>
<<<<<<< HEAD

=======
>>>>>>> de2a868 (Made backend and update cart and profile)
        <ArrowRight size={18} />
      </button>

    </div>
  );
}

<<<<<<< HEAD
export default OrderSummary;
=======
export default OrderSummary;
>>>>>>> de2a868 (Made backend and update cart and profile)
