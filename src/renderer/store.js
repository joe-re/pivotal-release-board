// @flow

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const configureStore = (preloadedState: Object) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore({});
