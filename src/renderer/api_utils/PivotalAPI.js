// @flow

import Request from './Request';
import type { Workspace } from '../types/Workspace';

async function getWorkspaces(params: { token: string }): Promise<Workspace[]> {
  const response = await Request.get({ url: '/my/workspaces', token: params.token });
  const json = await response.json();
  return json;
}

export default {
  getWorkspaces
};
