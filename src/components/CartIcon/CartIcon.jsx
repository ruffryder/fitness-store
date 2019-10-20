import React from "react";
import "./CartIcon.scss";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function CartIcon({ toggleCart }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <FaShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
