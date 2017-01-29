// @flow

import { combineReducers } from 'redux';
import auth from './auth';
import workspaces from './workspaces';
import containerState from './containerState';

const reducers = combineReducers({ auth, workspaces, containerState });

export default reducers;
