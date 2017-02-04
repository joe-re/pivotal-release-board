// @flow

import { handleActions } from 'redux-actions';
import * as actions from '../actions';
export type State = { token: string, authorized: boolean };

const initialState = { token: '', authorized: false };
const auth = handleActions({
  [actions.getWorkspaces]: {
    next: (_state, action): State => ({ token: action.payload.token, authorized: true }),
    throw: (_state, _action): State => initialState
  }
}, initialState);

export default auth;
