// @flow

type State = { token: string, autholized: boolean };
type Action = { type: 'SUCCESS_GET_WORKSPACES', token: string };

const auth = (state: State = { token: '', autholized: false }, action: Action): State => {
  switch (action.type) {
  case 'SUCCESS_GET_WORKSPACES':
    return { token: action.token, autholized: true };
  case 'FAILURE_GET_WORKSPACES':
    return { token: '', autholized: false };
  default:
    return state;
  }
};

export default auth;
