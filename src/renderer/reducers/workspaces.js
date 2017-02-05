// @flow

import { handleActions } from 'redux-actions';
import type { Workspace } from '../types/Workspace';
import type { GetWorkspacesPayload } from '../actions';

export type State = Workspace[];

const workspaces = handleActions({
  GET_WORKSPACES: {
    next: (_state, action: { payload: GetWorkspacesPayload }): State => action.payload.workspaces,
    throw: (_state, _action): State => []
  }
}, []);

export default workspaces;
