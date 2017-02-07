// @flow

import React, { Component } from 'react';
import format from 'date-fns/format';
import { ipcRenderer } from 'electron';

import type { Project } from '../../types/Project';
import type { Release } from '../../types/Release';
import domtoimage from 'dom-to-image';
type Props = {
  projects: Project[],
  releases: Release[],
  captureMode?: boolean
};

const ReleaseCard = (props: { project: ?Project, release: Release }) => {
  const { release } = props;
  const isOverDeadline = release.deadline && release.deadline < release.projected_completion;
  const backgroundColor = isOverDeadline ? '#ef5350' : '#03A9F4';
  return (
    <div
      key={release.id}
      className="ReleaseListRow"
      style={{
        border: '1px solid',
        borderRadius: '6px',
        margin: '8px',
        width: '280px',
        height: '200px',
        backgroundColor,
        color: 'white',
        padding: '16px'
      }}
      onClick={() => {
        console.log(release);
      }}
    >
      <div
        className="ReleaseName"
        style={{
          fontWeight: 'bold',
          fontSize: 'medium',
          borderBottom: '1px solid',
          color: '#FFF9C4',
          marginBottom: '8px',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        }}
      >
        {release.name}
      </div>
      <div className="ProjectedCompletion">
        <div
          className="label"
          style={{ marginBottom: '8px', fontWeight: 'bold' }}
        >
           Estimated completion date:
        </div>
        <div
          className="value"
          style={{
            fontSize: 'x-large',
            textAlign: 'center'
          }}
        >
          {format(release.projected_completion, 'YYYY/MM/DD')}
        </div>
      </div>
      <div className="ReleaseDeadLine">
        <div
          className="label"
          style={{ marginBottom: '8px', fontWeight: 'bold' }}
        >
           Deadline:
        </div>
        <div
          className="value"
          style={{
            fontSize: 'x-large',
            textAlign: 'center'
          }}
        >
          {release.deadline ? format(release.deadline, 'YYYY/MM/DD') : 'unscheduled'}
        </div>
      </div>
    </div>
  );
};

export default class ReleaseList extends Component {
  props: Props;
  selfDom: React.DOM;

  componentDidUpdate() {
    if (this.props.captureMode) {
      domtoimage.toPng(this.selfDom).then((dataUrl) => {
        const data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
        const buf = new Buffer(data, 'base64');
        const fileName = `./capture_${(new Date()).getTime()}.png`;
        require('fs').writeFileSync(`${fileName}.png`, buf, 'base64');
        ipcRenderer.send('COMPLETE_PRINT', { fileName });
      });
    }
  }

  render() {
    const props = this.props;
    const list = props.releases.sort((a, b) => {
      if (a.projected_completion !== b.projected_completion) {
        return a.projected_completion > b.projected_completion ? 1 : -1;
      }
      if (a.deadline && b.deadline && a.deadline !== b.deadline) {
        return a.deadline > b.deadline ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    }).map(v =>
      <ReleaseCard
        release={v}
        project={props.projects.find(project => project.id === v.project_id)}
      />
    );
    return (
      <div
        ref={(div) => {
          this.selfDom = div;
        }}
        className="ReleaseList"
        style={{
          padding: '16px 40px',
          display: 'flex',
          flexWrap: 'wrap',
          overflowY: this.props.captureMode ? 'initial' : 'scroll'
        }}
      >
        {list}
      </div>
    );
  }
};
