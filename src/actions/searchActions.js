import searchConstants from '../constants/searchConstants';

// ------------------------------------
// Actions
// ------------------------------------
function setKeyword(keyword = '') {
  return {
    type: searchConstants.SET_KEYWORD,
    payload: keyword,
  };
}

function setLocation(location = '') {
  return {
    type: searchConstants.SET_LOCATION,
    payload: location,
  };
}

const searchActions = {
  setKeyword,
  setLocation,
};

export default searchActions;
