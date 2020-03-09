import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import { Link } from "react-router-dom";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <Link to={`shop/${title.toLowerCase()}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            console.log(item);
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
