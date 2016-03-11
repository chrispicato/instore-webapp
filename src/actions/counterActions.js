import counterConstants from '../constants/counterConstants';

// ------------------------------------
// Actions
// ------------------------------------
function increment(value = 1) {
  return {
    type: counterConstants.COUNTER_INCREMENT,
    payload: value,
  };
}

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
function doubleAsync() {
  return (dispatch, getState) => new Promise((resolve) => {
    setTimeout(() => {
      dispatch(increment(getState().counter.number));
      resolve();
    }, 200);
  });
}

const actions = {
  increment,
  doubleAsync,
};

export default actions;
