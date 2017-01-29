// @flow

type State = { isRequesting: boolean, isFailedAuthorization: boolean };
type Action =
  { type: 'START_GET_WORKSPACES' } |
  { type: 'SUCCESS_GET_WORKSPACES' } |
  { type: 'FAILURE_GET_WORKSPACES' };

const initialState = {
  isRequesting: false,
  isFailedAuthorization: false
};
const containerState = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  case 'START_GET_WORKSPACES':
    return { isRequesting: true, isFailedAuthorization: false };
  case 'SUCCESS_GET_WORKSPACES':
    return { isRequesting: false, isFailedAuthorization: false };
  case 'FAILURE_GET_WORKSPACES':
    return { isRequesting: false, isFailedAuthorization: true };
  default:
    return state;
  }
};

export default containerState;
