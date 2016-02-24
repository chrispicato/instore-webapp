import counterConstants from '../constants/counterConstants';

// ------------------------------------
// Actions
// ------------------------------------
const increment = function (value = 1) {
  return {
    type: counterConstants.COUNTER_INCREMENT,
    payload: value
  };
};

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
const doubleAsync = function () {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      setTimeout(() => {
        dispatch(increment(getState().counter.number));
        resolve();
      }, 200);
    });
  };
};

const actions = {
  increment,
  doubleAsync
};

export default actions;
