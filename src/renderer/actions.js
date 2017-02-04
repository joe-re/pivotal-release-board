// @flow

import PivoralAPI from './api_utils/PivotalAPI';
import { createAction } from 'redux-actions';

export const startGetWorkSpaces = createAction('START_GET_WORKSPACES');
export const getWorkspaces = createAction('GET_WORKSPACES', (params: { token: string }) => {
  return PivoralAPI.getWorkspaces({ token: params.token });
});
