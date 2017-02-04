// @flow

import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const workspaces = handleActions({
  [actions.getWorkspaces]: {
    next: (_state, action) => action.payload,
    throw: (_state, _action) => []
  }
}, []);

export default workspaces;
