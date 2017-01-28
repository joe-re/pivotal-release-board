// @flow

type State = { token: string };
type Action = { type: 'TOKEN/SET_TOKEN', token: string };

const auth = (state: State = { token: '' }, action: Action): State => {
  switch (action.type) {
  case 'TOKEN/SET_TOKEN':
    return { token: action.token };
  default:
    return state;
  }
};

export default auth;
