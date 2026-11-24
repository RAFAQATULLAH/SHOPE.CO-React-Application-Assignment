
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import {
  UserRound,
  MapPin,
  Phone,
  Mail,
  CalendarDays,
  LogOut,
  LoaderCircle,
  ShoppingBag,
} from "lucide-react";

import { logoutCustomer } from "../../redux/slices/authSlice";
import { getMyOrders } from "../../services/orderService";

import "./Profile.css";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH CUSTOMER ORDERS
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError("");

        // No token needed. Browser sends the HttpOnly cookie.
        const data = await getMyOrders();

        setOrders(data.orders || []);
      } catch (error) {
        setError(error.message || "Unable to load orders");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [user]);

  // LOGOUT
  const handleLogout = async () => {
    await dispatch(logoutCustomer());

    window.dispatchEvent(new Event("user-auth-changed"));

    navigate("/login", { replace: true });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-PK", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatPrice = (price) => {
    return `Rs. ${Number(price).toLocaleString("en-PK")}`;
  };

  if (!user) {
    return null;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">

        {/* PAGE HEADER */}
        <div className="profile-heading">
          <div>
            <p className="profile-breadcrumb">
              <Link to="/">Home </Link>/ My Account
            </p>

            <h1>My Account</h1>
            <p>Manage your profile and track your orders.</p>
          </div>

          <button
            className="profile-logout"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <div className="profile-layout">

          {/* PROFILE DETAILS */}
          <section className="profile-card">
            <div className="profile-card-heading">
              <div className="profile-icon">
                <UserRound size={25} />
              </div>

              <div>
                <h2>Personal Information</h2>
                <p>Your account details</p>
              </div>
            </div>

            <div className="profile-info">

              <div className="profile-info-item">
                <UserRound size={19} />
                <div>
                  <span>Full Name</span>
                  <h3>{user.name || "Not provided"}</h3>
                </div>
              </div>

              <div className="profile-info-item">
                <Mail size={19} />
                <div>
                  <span>Email Address</span>
                  <h3>{user.email || "Not provided"}</h3>
                </div>
              </div>

              <div className="profile-info-item">
                <Phone size={19} />
                <div>
                  <span>Phone Number</span>
                  <h3>{user.phone || "Not added yet"}</h3>
                </div>
              </div>

              <div className="profile-info-item">
                <MapPin size={19} />
                <div>
                  <span>Delivery Address</span>
                  <h3>{user.address || "Not added yet"}</h3>
                </div>
              </div>

            </div>
          </section>

          {/* ORDER HISTORY */}
          <section className="orders-section">

            <div className="orders-heading">
              <div>
                <h2>My Orders</h2>
                <p>Track your recent purchases.</p>
              </div>

              <div className="orders-count">
                {orders.length} Orders
              </div>
            </div>

            {loading ? (
              <div className="orders-message">
                <LoaderCircle className="spin-icon" size={28} />
                <p>Loading your orders...</p>
              </div>
            ) : error ? (
              <div className="orders-message">
                <p>{error}</p>
              </div>
            ) : orders.length === 0 ? (
              <div className="empty-orders">
                <ShoppingBag size={45} />
                <h3>No orders yet</h3>
                <p>
                  You haven't placed any orders yet.
                  Start shopping to see your orders here.
                </p>

                <button onClick={() => navigate("/")}>
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="orders-list">

                {orders.map((order) => (
                  <div className="order-card" key={order._id}>

                    <div className="order-top">
                      <div>
                        <span>Order ID</span>
                        <h3>#{order._id.slice(-8).toUpperCase()}</h3>
                      </div>

                      <span
                        className={`order-status ${order.orderStatus?.toLowerCase()}`}
                      >
                        {order.orderStatus}
                      </span>
                    </div>

                    <div className="order-date">
                      <CalendarDays size={16} />
                      {formatDate(order.createdAt)}
                    </div>

                    <div className="order-products">
                      {order.items.map((item, index) => (
                        <div
                          className="order-product"
                          key={`${order._id}-${index}`}
                        >
                          <img
                            src={item.image || "/placeholder.png"}
                            alt={item.name}
                          />

                          <div className="order-product-details">
                            <h4>{item.name}</h4>

                            <p>
                              Qty: {item.quantity}
                              {item.size && ` · Size: ${item.size}`}
                              {item.color && ` · Color: ${item.color}`}
                            </p>
                          </div>

                          <strong>
                            {formatPrice(item.price * item.quantity)}
                          </strong>
                        </div>
                      ))}
                    </div>

                    <div className="order-bottom">
                      <div>
                        <span>Payment</span>
                        <strong>{order.paymentMethod}</strong>
                      </div>

                      <div>
                        <span>Total Amount</span>
                        <strong className="order-total">
                          {formatPrice(order.totalAmount)}
                        </strong>
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            )}

          </section>

        </div>
      </div>
    </div>
  );
}

export default Profile;
