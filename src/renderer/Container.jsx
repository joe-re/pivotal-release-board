// @flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';
import TokenInputModal from './components/TokenInputModal';


const Container = (props: { token: string, actions: typeof Actions }) => {
  console.log(props);
  return (
    <div>
      <TokenInputModal isOpen={true} actions={props.actions} />
    </div>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
