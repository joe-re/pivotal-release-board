// @flow

import { handleActions } from 'redux-actions';
import type { Release } from '../../types/Release';
import type { GetReleasesPayload } from '../actions';

export type State = Release[];

const releases = handleActions({
  GET_RELEASES: {
    next: (_state, action: { payload: GetReleasesPayload }): State => action.payload.releases,
    throw: (_state, _action): State => []
  }
}, []);

export default releases;
