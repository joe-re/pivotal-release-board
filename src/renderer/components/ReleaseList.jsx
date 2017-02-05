// @flow

import type { Project } from '../types/Project';
import type { Release } from '../types/Release';

type Props = { projects: Project[], releases: Release[] };

const ReleaseList = (props: Props) => {
  const list = props.releases.sort((a, b) => {
    return a.projected_completion > b.projected_completion ? 1 : -1;
  }).map(v =>
    <div
      key={v.id}
      className="ReleaseListRow"
      onClick={() => {
        console.log(v);
      }}
    >
      {v.name}/{v.projected_completion}/{v.deadline}
    </div>
  );
  return (
    <div className="ReleaseList">{list}</div>
  );
};
export default ReleaseList;
