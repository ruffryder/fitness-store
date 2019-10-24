import React from "react";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>&#9400; copyright {currentYear}. All rights reserved</div>
      <div>
        <ul className="footerNav">
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/featured">Featured Products</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
