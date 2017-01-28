// @flow

export function setToken(params: { token: string }) {
  return (dispatch: any) => {
    dispatch({ type: 'TOKEN/SET_TOKEN', token: params.token });
  };
}
