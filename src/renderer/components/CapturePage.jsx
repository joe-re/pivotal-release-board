// @flow


import { Component } from 'react';
import ReleaseList from './ReleaseList';
import { ipcRenderer } from 'electron';

import type { Project } from '../types/Project';
import type { Release } from '../types/Release';

type State = {
  projects: Project[],
  releases: Release[]
};
export default class CapturePage extends Component {
  state: State;
  componentDidMount() {
    ipcRenderer.sendSync('REQUEST_RELEASES', (args) => {
      this.setState({ projects: args.projects, releases: args.releases });
    });
  }

  componentDidMount() {
    ipcRenderer.send('COMPLETE_RENDER');
  }

  render() {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <ReleaseList projects={this.state.projects} releases={this.state.releases} />
      </div>
    );
  }
}
