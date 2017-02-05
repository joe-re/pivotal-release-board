// @flow

import { handleActions } from 'redux-actions';
import type { Project } from '../types/Project';
import type { GetReleasesPayload } from '../actions';

export type State = Project[];

const projects = handleActions({
  GET_RELEASES: {
    next: (_state, action: { payload: GetReleasesPayload }): State => action.payload.projects,
    throw: (_state, _action): State => []
  }
}, []);

export default projects;
