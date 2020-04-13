import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import CollectionOverviewContainer from '../../components/collections-overview/collection-overview-container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart])

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
  </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);