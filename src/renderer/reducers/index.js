// @flow

import { combineReducers } from 'redux';
import auth from './auth';
import workspaces from './workspaces';
import projects from './projects';
import releases from './releases';
import containerState from './containerState';

const reducers = combineReducers({ auth, workspaces, projects, releases, containerState });

export default reducers;
