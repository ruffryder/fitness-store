import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectFeaturedItems } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import "./FeaturedPage.scss";

class FeaturedPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { featuredItems } = this.props;
    console.log(featuredItems);
    return (
      <div className="item-container">
        {featuredItems.map(collectionItems =>
          collectionItems.map(item => (
            <CollectionItem
              className="collection-item"
              key={item.id}
              item={item}
            />
          ))
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const mapStateToProps = createStructuredSelector({
  featuredItems: selectFeaturedItems
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPage);
