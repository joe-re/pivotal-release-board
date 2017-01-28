// @flow

import React from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';

window.React = React;

render(<Hello />, document.getElementById('app'));
