// @flow

import type { Workspace } from '../types/Workspace';
import * as actions from '../actions';
import type { State as auth } from '../reducers/auth';

type Props = {
  actions: typeof actions,
  workspaces: Workspace[],
  auth: auth
};

const WorkspaceList = (props: Props) => {
  const list = props.workspaces.map((v) =>
    <div
      key={v.id}
      className="WorkSpaceName"
      onClick={() => {
        props.actions.getReleases({ projectIds: v.project_ids, token: props.auth.token });
      }}
    >
      {v.name}
    </div>
  );
  return (
    <div className="WorkSpaceList">{list}</div>
  );
};
export default WorkspaceList;
