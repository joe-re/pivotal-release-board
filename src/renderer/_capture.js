// @flow

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import CapturePage from './components/CapturePage';

window.React = React;

render(<CapturePage/>, document.getElementById('app'));
