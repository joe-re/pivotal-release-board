// @flow

import type { Workspace } from '../types/Workspace';
import * as actions from '../actions';
import type { State as auth } from '../reducers/auth';

type Props = {
  actions: typeof actions,
  workspaces: Workspace[],
  selectedWorkspaceId: ?number,
  auth: auth
};

type WorkspaceRowProps = { workspace: Workspace, isSelected: boolean, onClick: (workspace: Workspace) => void };
const WorkspaceRow = (props: WorkspaceRowProps) => {
  const { workspace, isSelected, onClick } = props;
  const color = isSelected ? 'white' : '#9CA3AA';
  const backgroundColor = isSelected ? '#6698C8' : '#303E4D';
  return (
    <li
      key={workspace.id}
      className="WorkspaceRow list-group-item"
      style={{ color, backgroundColor, cursor: 'pointer' }}
      onClick={() => onClick(workspace)}
    >
      <div className="media-body" style={{ cursor: 'pointer' }}>{workspace.name}</div>
    </li>
  );
};

const WorkspaceList = (props: Props) => {
  const handleSelect = (workspace: Workspace) => {
    props.actions.selectWorkSpace({ workspaceId: workspace.id });
    props.actions.getReleases({ projectIds: workspace.project_ids, token: props.auth.token });
  };

  const list = props.workspaces.map((v) =>
    <WorkspaceRow
      key={v.id}
      workspace={v}
      isSelected={v.id === props.selectedWorkspaceId}
      onClick={handleSelect}
    />
  );
  list.unshift(<li key="workspace-list-first-row" style={{ color: 'white' }}>Workspaces</li>);
  return (
    <ul
      className="WorkSpaceList list-group"
      style={{ width: '200px', backgroundColor: '#303E4D' }}
    >
      {list}
    </ul>
  );
};
export default WorkspaceList;
