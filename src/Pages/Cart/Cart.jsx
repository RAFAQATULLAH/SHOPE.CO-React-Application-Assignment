import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./Cart.css";
import CartItem from "../../Components/Cart/CartItem";
import OrderSummary from "../../Components/Cart/OrderSummary";
import CartEmpty from "../../Components/Cart/CartEmpty";
import Nav from "../../Components/Nav/Nav"
import Newsletters from "../../Components/News/Newsletters"
import Footer from "../../Components/Footer/Footer"
import { useCart } from "../../context/CartContext"


function Cart() {
  const {cart} = useCart();

  return (
    <>
    <Nav/>
    <div className="cart-page">

      {/* Breadcrumb */}
      <div className="cart-breadcrumb">
        <Link to="/">Home</Link>

        <ChevronRight size={15} />

        <span>Cart</span>
      </div>

      {/* Heading */}
      <h1 className="cart-title">
        YOUR CART
      </h1>

      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="cart-layout">

          {/* Cart Items */}
          <div className="cart-items-container">

            {cart.map((item) => (
              <CartItem
                key={`${item.id}-${item.size}-${item.color}`}
                item={item}
              />
            ))}

          </div>

          {/* Summary */}
          <OrderSummary />

        </div>
      )}

    </div>
    <Newsletters/>
    <Footer/>
    </>
  );
  
}

export default Cart;