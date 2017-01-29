// @flow

export type Workspace = {
  id: number,
  kind: "workspace",
  name: string,
  person_id: number,
  project_ids: number[]
};
