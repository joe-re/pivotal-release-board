// @flow

import Request from './Request';

Request.get({ url: 'https://www.pivotaltracker.com/services/v5/my/workspaces' }).then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
});;
