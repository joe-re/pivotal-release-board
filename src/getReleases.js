// @flow

import Request from './Request';

export default async function getReleases(token: string) {
  const response = await Request.get({
    url: 'https://www.pivotaltracker.com/services/v5/my/workspaces',
    token
  });
  const projectIds = (await response.json())[0].project_ids;
  const releases = projectIds.map(async(pid) => {
    const project = await Request.get({
      url: `https://www.pivotaltracker.com/services/v5/projects/${pid}/releases`,
      token
    });
    return project.json();
  });
  return Array.prototype.concat.apply([], await Promise.all(releases));
}
