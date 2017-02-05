// @flow

import WorkspaceList from './WorkspaceList';
import ReleaseList from './ReleaseList';
import TokenInputModal from './TokenInputModal';
import LoadingSpinner from './LoadingSpinner';
import * as Actions from '../actions';
import type { Workspace } from '../types/Workspace';
import type { State as auth } from '../reducers/auth';
import type { Project } from '../types/Project';
import type { Release } from '../types/Release';

type Props = {
  containerState: Object,
  workspaces: Workspace[],
  auth: auth,
  projects: Project[],
  releases: Release[],
  actions: typeof Actions
};

const WorkSpacesPage = (props: Props) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <WorkspaceList
        auth={props.auth}
        workspaces={props.workspaces}
        actions={props.actions}
        selectedWorkspaceId={props.containerState.selectedWorkspaceId}
      />
      {props.containerState.isRequesting ?
        <LoadingSpinner /> :
        <ReleaseList projects={props.projects} releases={props.releases} />
      }
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
