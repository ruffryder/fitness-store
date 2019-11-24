import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartIcon.scss";

function CartIcon({ toggleCart, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <FaShoppingCart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartIcon;
