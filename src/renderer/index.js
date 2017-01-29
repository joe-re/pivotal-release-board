// @flow

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';

window.React = React;

render(<Root/>, document.getElementById('app'));
