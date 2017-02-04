// @flow

import type { Workspace } from '../types/Workspace';
type Props = { workspaces: Workspace[] };

const WorkspaceList = (props: Props) => {
  const list = props.workspaces.map((v) =>
    <div className="WorkSpaceName">{v.name}</div>
  );
  return (
    <div className="WorkSpaceList">{list}</div>
  );
};
export default WorkspaceList;
