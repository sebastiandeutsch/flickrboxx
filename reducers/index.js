import Immutable from 'immutable';
import * as Actions from 'constants/ActionTypes';

const defaultPhotoState = Immutable.fromJS({
    searchText: null,
    page: null,
    photos: [],
    status: null
});

const actionsMap = {
  [Actions.SEARCH_PENDING]: (state, action) => {
    return state.merge({
      status: 'PENDING'
    });
  },

  [Actions.SEARCH_RESULT]: (state, action) => {
    var results = action.payload;
    var photos = results.photos;
    if (results.page != 1 && results.searchText === state.get('searchText')) {
      photos =  state.get('photos').concat(Immutable.fromJS(photos));
    }

    return state.merge({
      searchText: results.searchText,
      page: results.page,
      photos: photos,
      status: 'DONE'
    });
  }
}

export function photos(state = defaultPhotoState, action) {
  const reduceFn = actionsMap[ action.type ]

  if (!reduceFn) {
    return state
  }

  return reduceFn(state, action)
};
