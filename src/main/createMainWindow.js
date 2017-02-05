import { BrowserWindow } from 'electron';

class MainWindow {
  constructor() {
    this.window = new BrowserWindow({ width: 1280, height: 1024 });
    this.window.loadURL(`file://${__dirname}/../../index.html`);
  }
}

function createMainWindow() {
  return new MainWindow();
}

export default createMainWindow;
