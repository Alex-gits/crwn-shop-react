import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionMap);

      this.setState({loading: false});
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
    </div>
    );
  }
}

const mapStateToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapStateToProps)(ShopPage);