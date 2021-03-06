import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import "./CollectionPage.scss";

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="collection-title">{title}</h2>
      <div className="items-container">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
