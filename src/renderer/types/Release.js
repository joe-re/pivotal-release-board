// @flow
export type Release = {
  id: number,
  name: string,
  project_id: number,
  deadline: string,
  projected_completion: string,
  projected_completion_interval: string,
  current_state: string
};
