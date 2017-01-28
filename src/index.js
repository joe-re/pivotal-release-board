// @flow

import Request from './Request';

console.log(process.argv[2]);
Request.get({
  url: 'https://www.pivotaltracker.com/services/v5/my/workspaces',
  token: process.argv[2]
}).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});;
