// @flow

import { handleActions } from 'redux-actions';

type State = { isRequesting: boolean, isFailedAuthorization: boolean };
const initialState = {
  isRequesting: false,
  isFailedAuthorization: false
};

const containerState = handleActions({
  START_GET_WORKSPACES: (_s, _a): State => ({ isRequesting: true, isFailedAuthorization: false }),
  GET_WORKSPACES: {
    next: (_s, _a): State => initialState,
    throw: (_s, _a): State => ({ isRequesting: false, isFailedAuthorization: true })
  }
}, initialState);


export default containerState;
