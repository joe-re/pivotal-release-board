import { app } from 'electron';
import createMainWindow from './createMainWindow';

app.on('ready', () => {
  createMainWindow();
});
