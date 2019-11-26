import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, linkUrl, history, match }) {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="content">
        <h1 className="menu-item-title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
