// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';
import WorkspacesPage from './components/WorkspacesPage';
import type { Workspace } from './types/Workspace';
import type { State as auth } from './reducers/auth';

type Props = {
  containerState: Object,
  workspaces: Workspace[],
  auth: auth,
  actions: typeof Actions
};

const Container = (props: Props) => {
  return (
    <div>
      <WorkspacesPage {...props} />
    </div>
  );
};

const mapStateToProps = (state): any => ({
  auth: state.auth,
  workspaces: state.workspaces,
  containerState: state.containerState
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
