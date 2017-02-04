// @flow

import WorkspaceList from './WorkspaceList';
import TokenInputModal from './TokenInputModal';
import * as Actions from '../actions';
import type { Workspace } from '../types/Workspace';
import type { State as auth } from '../reducers/auth';

type Props = {
  containerState: Object,
  workspaces: Workspace[],
  auth: auth,
  actions: typeof Actions
};

const WorkSpacesPage = (props: Props) => {
  return (
    <div>
      <h1>Hello WorkSpacesPage</h1>
      <WorkspaceList workspaces={props.workspaces} />
      <TokenInputModal
        isOpen={!props.auth.authorized}
        actions={props.actions}
        isRequesting={props.containerState.isRequesting}
        isFailedAuthorization={props.containerState.isFailedAuthorization}
      />
    </div>
  );
};
export default WorkSpacesPage;
