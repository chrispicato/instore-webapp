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

function setChangingLocation(changingLocation = false) {
  return {
    type: searchConstants.SET_CHANGING_LOCATION,
    payload: changingLocation,
  }
}

const searchActions = {
  setKeyword,
  setLocation,
  setChangingLocation,
};

export default searchActions;
