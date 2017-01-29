// @flow

import PivoralAPI from './api_utils/PivotalAPI';

export function getWorkspaces(params: { token: string }) {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'START_GET_WORKSPACES' });
    PivoralAPI.getWorkspaces({ token: params.token }).then((workspaces) => {
      dispatch({ type: 'SUCCESS_GET_WORKSPACES', workspaces, token: params.token });
    }).catch(_response => {
      console.log(_response);
      dispatch({ type: 'FAILURE_GET_WORKSPACES' });
    });
  };
}
