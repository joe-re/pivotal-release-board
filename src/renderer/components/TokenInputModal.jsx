// @flow

import { Component } from 'react';
import Modal from 'react-modal';
import * as Actions from '../actions';

type Props = {
  isOpen: boolean,
  actions: typeof Actions
};

type State = {
  token: string
};

export default class TokenInputModal extends Component {
  state: State;
  props: Props;
  tokenInput: HTMLInputElement;

  constructor(props: Props) {
    super(props);
    this.state = { token: '' };
  }

  componentDidMount() {
    this.tokenInput.focus();
  }

  handleChangeToken(e: SyntheticEvent) {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      this.setState({ token: target.value });
    }
  }

  handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    this.props.actions.setToken({ token: this.state.token });
  }

  render() {
    const enableSubmit = !!this.state.token;
    return (
      <Modal
        contentLabel="PivotalTokenInputModal"
        isOpen={this.props.isOpen}
      >
        <h2>Set Your PivotalTracker's Token</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Token</label>
            <input
              className="form-control"
              value={this.state.token}
              onChange={this.handleChangeToken.bind(this)}
              ref={(input) => {
                this.tokenInput = input;
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-large btn-primary"
            disabled={!enableSubmit}
            style={enableSubmit ? {} : { opacity: 0.5, cursor: 'not-allowed' }}
          >
            OK
          </button>
        </form>
      </Modal>
    );
  }
}
