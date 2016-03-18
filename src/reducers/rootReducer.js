import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import searchReducer from './searchReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  search: searchReducer,
  counter: counterReducer,
  routing: routeReducer,
});
