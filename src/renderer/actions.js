// @flow

import PivoralAPI from './api_utils/PivotalAPI';
import { createAction } from 'redux-actions';
import type { Workspace } from './types/Workspace';
import type { Project } from './types/Project';
import type { Release } from './types/Release';

export const startGetWorkSpaces = createAction('START_GET_WORKSPACES');

export type GetWorkspacesPayload = { workspaces: Workspace[], token: string }
export const getWorkspaces: (params: { token: string }) => void =
  createAction('GET_WORKSPACES', (params: { token: string }): Promise<GetWorkspacesPayload> => {
    return PivoralAPI.getWorkspaces({ token: params.token }).then((json) =>
      ({ workspaces: json, token: params.token })
    );
  }
);

export type GetReleasesPayload = { projects: Project[], releases: Release[] }
export const getReleases: (params: { token: string, projectIds: number[] }) => void =
  createAction('GET_RELEASES', (params) => {
    const fetch = Promise.all([ PivoralAPI.getProjects(params), PivoralAPI.getReleases(params) ]);
    return fetch.then(([ projects, releases ]) => ({ projects, releases }));
  }
);
