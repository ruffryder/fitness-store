import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import CollectionPage from "./CollectionPage";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
