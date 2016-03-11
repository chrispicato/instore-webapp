import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import counterReducer from './counterReducer';

export default combineReducers({
  counter: counterReducer,
  routing: routeReducer,
});
