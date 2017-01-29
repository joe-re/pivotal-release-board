// @flow

type State = Object[];
type Action = { type: 'GET_WORKSPACES', workspaces: State };

const workspaces = (state: State = [], action: Action): State => {
  switch (action.type) {
  case 'SUCCESS_GET_WORKSPACES':
    return action.workspaces;
  default:
    return state;
  }
};

export default workspaces;
