
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  clearCart,
  selectCartItems,
  selectCartSubtotal,
} from "../../redux/slices/cartSlice";

import { placeOrder } from "../../services/orderService";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux cart state
  const cart = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);

  // Redux authentication state
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cart.length) {
      setError("Your cart is empty.");
      return;
    }

    if (!user) {
      setError("Please login before placing your order.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const orderData = {
        customer: formData,
        items: cart.map((item) => ({
          productId: item._id || item.id,
          quantity: item.quantity,
          size: item.size || "",
          color: item.color || "",
        })),
      };

      // Browser sends the HttpOnly authentication cookie.
      const response = await placeOrder(orderData);

      if (response.success) {
        dispatch(clearCart());

        navigate("/profile", {
          state: { orderPlaced: true },
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Unable to place your order."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-content">

        {/* LEFT SIDE - CHECKOUT FORM */}
        <div className="checkout-form">
          <h2 className="checkout-section-title">
            Delivery Information
          </h2>

          {error && (
            <p className="checkout-error">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="checkout-input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="checkout-input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="checkout-input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03XXXXXXXXX"
                required
              />
            </div>

            <div className="checkout-input-group">
              <label>Delivery Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House, street, area, city"
                rows="4"
                required
              />
            </div>

            {/* PAYMENT METHOD */}
            <h2 className="checkout-section-title">
              Payment Method
            </h2>

            <div className="payment-method">
              <input
                type="radio"
                id="cod"
                name="payment"
                checked
                readOnly
              />

              <label htmlFor="cod">
                Cash on Delivery (COD)
              </label>
            </div>

            <button
              type="submit"
              className="place-order-btn"
              disabled={loading || cart.length === 0}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="checkout-summary">
          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                className="checkout-product"
                key={`${item._id || item.id}-${item.size}-${item.color}`}
              >
                <img
                  src={item.images?.img1 || item.image}
                  alt={item.name}
                />

                <div className="checkout-product-info">
                  <h3>{item.name}</h3>

                  <p>Size: {item.size || "N/A"}</p>
                  <p>Color: {item.color || "N/A"}</p>
                  <p>Quantity: {item.quantity}</p>

                  <strong>
                    Rs. {(Number(item.price) * item.quantity).toLocaleString()}
                  </strong>
                </div>
              </div>
            ))
          )}

          <div className="checkout-summary-details">
            <div className="checkout-summary-row">
              <span>Subtotal</span>
              <strong>
                Rs. {subtotal.toLocaleString()}
              </strong>
            </div>

            <div className="checkout-summary-row">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>

            <div className="checkout-total">
              <span>Total</span>
              <strong>
                Rs. {subtotal.toLocaleString()}
              </strong>
            </div>
          </div>

          <p className="checkout-note">
            Final order amount is calculated by the backend using database prices.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
