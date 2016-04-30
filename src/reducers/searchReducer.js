import searchConstants from '../constants/searchConstants';

// ------------------------------------
// Reducer
// ------------------------------------

function initialSearchState() {
  return {
    keyword: '',
    location: '',
    changingLocation: false,
  };
}

export default function searchReducer(state = initialSearchState(), action) {
  switch (action.type) {
    case searchConstants.SET_KEYWORD:
      return Object.assign({}, state, {
        keyword: action.payload,
      });
    case searchConstants.SET_LOCATION:
      return Object.assign({}, state, {
        location: action.payload,
      });
    default:
      return state;
  }
}
