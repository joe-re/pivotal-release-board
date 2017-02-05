// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';
import WorkspacesPage from './components/WorkspacesPage';
import type { Workspace } from '../types/Workspace';
import type { State as auth } from './reducers/auth';
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

const Container = (props: Props) => {
  return (
    <WorkspacesPage {...props} />
  );
};

const mapStateToProps = (state): any => ({
  auth: state.auth,
  workspaces: state.workspaces,
  containerState: state.containerState,
  projects: state.projects,
  releases: state.releases
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
