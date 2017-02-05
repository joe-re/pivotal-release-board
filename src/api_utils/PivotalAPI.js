// @flow

import Request from './Request';
import type { Workspace } from '../types/Workspace';
import type { Release } from '../types/Release';
import type { Project } from '../types/Project';
import { Response } from 'node-fetch';

async function getWorkspaces(params: { token: string }): Promise<Workspace[]> {
  const response = await Request.get({ url: '/my/workspaces', token: params.token });
  const json = await response.json();
  return json;
}

async function getReleases(params: { token: string, projectIds: number[] }): Promise<Release[]> {
  const responses: Response[] = await Promise.all(
    params.projectIds.map((id) => Request.get({
      url: `/projects/${id}/releases`,
      token: params.token,
      parameters: {
        fields: 'id,name,project_id,deadline,projected_completion,projected_completion_interval,current_state,deadline',
        with_state: 'unstarted'
      }
    }))
  );
  return Array.prototype.concat.apply([], await Promise.all(responses.map((v) => v.json())));
}

async function getProjects(params: { token: string, projectIds: number[] }): Promise<Project[]> {
  const responses: Response[] = await Promise.all(
    params.projectIds.map((id) => Request.get({
      url: `/projects/${id}`,
      token: params.token
    }))
  );
  return await Promise.all(responses.map((v) => v.json()));
}

export default {
  getWorkspaces,
  getReleases,
  getProjects
};
