import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FlickrBoxxActions from 'actions/FlickrBoxxActions';
import SearchBar from 'components/SearchBar'
import PhotoList from 'components/PhotoList'

@connect(state => ({
  photos: state.photos.get('photos'),
  status: state.photos.get('status')
}))
class LebenslaufApp extends React.Component {
  render() {
    const { dispatch, photos } = this.props;
    const actions = bindActionCreators(FlickrBoxxActions, dispatch);

    return (
      <div>
        <h1>FlickrBoxx</h1>
        <SearchBar searchPhotos={actions.searchPhotos} />
        <h2>Your Search</h2>
        <PhotoList photos={photos} status={status} actions={actions} />
      </div>
    );
  }
}

export default LebenslaufApp;
