// @flow

import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise';

const configureStore = (preloadedState: Object) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(promiseMiddleware))
  );
  return store;
};

export default configureStore({});
