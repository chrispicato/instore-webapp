import { applyMiddleware, compose, createStore } from 'redux';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore({ initialState = {}, history }) {
  // Sync with router via history instance (main.js)
  const routerMiddleware = syncHistory(history);

  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, routerMiddleware);
  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('../containers/DevTools').default.instrument();
    middleware = compose(middleware, devTools);
  }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState);
  if (__DEBUG__) routerMiddleware.listenForReplays(store, ({ routing }) => routing.location);

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
