// @flow

import { handleActions } from 'redux-actions';
import * as actions from '../actions';

type State = { isRequesting: boolean, isFailedAuthorization: boolean };
const initialState = {
  isRequesting: false,
  isFailedAuthorization: false
};

const containerState = handleActions({
  [actions.startGetWorkSpaces]: (_s, _a): State => ({ isRequesting: true, isFailedAuthorization: false }),
  [actions.getWorkspaces]: {
    next: (_s, _a): State => initialState,
    throw: (_s, _a): State => ({ isRequesting: false, isFailedAuthorization: true })
  }
}, initialState);


export default containerState;
