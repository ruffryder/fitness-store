import React from "react";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from "./Header.styles";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/shop" className="option">
          Contact
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
        ) : (
          <OptionLink className="option" to="/signin">
            Sign In
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
