import 'babel-polyfill';
import { app } from 'electron';
import createMainWindow from './createMainWindow';
import createCaptureWindow from './createCaptureWindow';

app.on('ready', () => {
  if (process.argv[2] === 'capturemode') {
    createCaptureWindow(process.argv[3], Number(process.argv[4]));
  } else {
    createMainWindow();
  }
});

app.on('window-all-closed', () => {
  app.quit();
});
