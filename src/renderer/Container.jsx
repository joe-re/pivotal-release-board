// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';
import TokenInputModal from './components/TokenInputModal';

type Props = {
  token: string,
  actions: typeof Actions,
  containerState: Object
};

const Container = (props: Props) => {
  console.log(props);
  return (
    <div>
      <TokenInputModal
        isOpen={true}
        actions={props.actions}
        isRequesting={props.containerState.isRequesting}
        isFailedAuthorization={props.containerState.isFailedAuthorization}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  workspaces: state.workspaces,
  containerState: state.containerState
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
