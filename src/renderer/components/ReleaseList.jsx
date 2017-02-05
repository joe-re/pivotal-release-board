// @flow

import format from 'date-fns/format';

import type { Project } from '../types/Project';
import type { Release } from '../types/Release';
type Props = { projects: Project[], releases: Release[] };

const ReleaseCard = (props: { project: ?Project, release: Release }) => {
  const { release } = props;
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
        backgroundColor: '#03A9F4',
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
      <div className="ReleaseDeadLine" style={{ color: '#E0E0E0' }}>
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

const ReleaseList = (props: Props) => {
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
      className="ReleaseList"
      style={{
        padding: '16px 40px',
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'scroll',
        alignContent: 'space-between'
      }}
    >
      {list}
    </div>
  );
};
export default ReleaseList;
