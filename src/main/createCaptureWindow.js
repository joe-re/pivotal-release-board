// @flow

import { BrowserWindow } from 'electron';
import { ipcMain } from 'electron';
import PivotalAPI from '../api_utils/PivotalAPI';

class CaptureWindow {
  window: any;

  constructor(token: string, workdpaceId: number) {
    this.window = new BrowserWindow({ width: 1280, height: 1024 });
    this.window.loadURL(`file://${__dirname}/../../capture.html`);
    ipcMain.once('REQUEST_RELEASES', (e) => {
      PivotalAPI.getWorkspaces({ token }).then((workspaces) => {
        const workspace = workspaces.find((v) => v.id === workdpaceId);
        if (!workspace) {
          return Promise.reject('cannot find workspace.');
        }
        const params = { token, projectIds: workspace.project_ids };
        return Promise.all([ PivotalAPI.getProjects(params), PivotalAPI.getReleases(params) ]);
      }).then(([ projects, releases ]) => {
        e.returnValue = { projects, releases };
      }).catch(err => {
        console.log(err);
        this.window.close();
      });
    });

    ipcMain.on('COMPLETE_PRINT', (_e, args) => {
      console.log(`success: ${args.fileName}`);
      this.window.close();
    });
  }
}

function createCaptureWindow(token: string, workdpaceId: number) {
  return new CaptureWindow(token, workdpaceId);
}

export default createCaptureWindow;
