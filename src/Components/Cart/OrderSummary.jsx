
import React, { useState } from "react";
import { Tag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCartSubtotal,
} from "../../redux/slices/cartSlice";

import "./OrderSummary.css";

function OrderSummary() {
  const subtotal = useSelector(selectCartSubtotal);

  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");

  const deliveryFee = 15;

  const discount = promoApplied ? subtotal * 0.2 : 0;

  const total = subtotal - discount + deliveryFee;

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SAVE20") {
      setPromoApplied(true);
      setPromoMessage("Promo applied!");
    } else {
      setPromoApplied(false);
      setPromoMessage("Invalid promo code");
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="order-summary">

      <h2>Order Summary</h2>

      {/* Subtotal */}
      <div className="summary-row">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(0)}</strong>
      </div>

      {/* Discount */}
      <div className="summary-row">
        <span>Discount (-20%)</span>
        <strong className="discount-value">
          -${discount.toFixed(0)}
        </strong>
      </div>

      {/* Delivery */}
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
          <Tag size={18} />

          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>

        <button onClick={applyPromo}>
          Apply
        </button>
      </div>

      {promoMessage && (
        <p className={promoApplied ? "promo-success" : "promo-error"}>
          {promoMessage}
        </p>
      )}

      {/* Checkout */}
      <button
        className="checkout-button"
        onClick={handleCheckout}
      >
        <span>Go to Checkout</span>
        <ArrowRight size={18} />
      </button>

    </div>
  );
}

export default OrderSummary;
