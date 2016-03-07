import counterConstants from '../constants/counterConstants';

// ------------------------------------
// Reducer
// ------------------------------------

function initialCounterState() {
  return {
    number: 0,
  };
}

export default function counterReducer(state = initialCounterState(), action) {
  switch (action.type) {
    case counterConstants.COUNTER_INCREMENT:
      return Object.assign({}, state, {
        number: state.number + action.payload,
      });
    default:
      return state;
  }
}
