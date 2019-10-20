import React from "react";
import "./CartIcon.scss";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

function CartIcon({ toggleCart, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <FaShoppingCart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
