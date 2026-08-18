import React from "react";
import { Link } from "react-router-dom";

import "./CartEmpty.css";

function CartEmpty() {
  return (
    <div className="cart-empty">

      <h2>Your cart is empty</h2>

      <p>
        Looks like you haven't added anything to your cart yet.
      </p>

      <Link to="/category/">
        Continue Shopping
      </Link>

    </div>
  );
}

export default CartEmpty;