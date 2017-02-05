// @flow

import { handleActions } from 'redux-actions';
import type { SelectWorkspacePayload } from '../actions';

type State = {
  isRequesting: boolean,
  isFailedAuthorization: boolean,
  selectedWorkspaceId: ?number
};
const initialState = {
  isRequesting: false,
  isFailedAuthorization: false,
  selectedWorkspaceId: null
};

const containerState = handleActions({
  START_GET_WORKSPACES: (s, _a): State => Object.assign({}, s, { isRequesting: true, isFailedAuthorization: false }),
  GET_WORKSPACES: {
    next: (_s, _a): State => initialState,
    throw: (s, _a): State => Object.assign({}, s, { isRequesting: false, isFailedAuthorization: true })
  },
  SELECT_WORKSPACE: {
    next: (s, a: { payload: SelectWorkspacePayload }): State =>
      Object.assign({}, s, { selectedWorkspaceId: a.payload.selectedWorkspaceId }),
    throw: (s, _a): State => s
  }
}, initialState);


export default containerState;
