// @flow

import 'babel-polyfill';
import getReleases from './getReleases';

getReleases(process.argv[2]).then(releases => {
  console.log(releases);
}).catch(error => console.log(error));
