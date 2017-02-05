import { BrowserWindow } from 'electron';
import { ipcMain } from 'electron';
import fs from 'fs';

class MainWindow {
  constructor() {
    this.window = new BrowserWindow({ width: 1280, height: 1024 });
    this.window.loadURL(`file://${__dirname}/../../index.html`);
    ipcMain.on('COMPLETE_RENDER', () => {
      this.window.webContents.capturePage((image: any) => {
        console.log(image);
        fs.writeFile('./image.png', image.toPNG());
      });
    });
  }
}

function createMainWindow() {
  return new MainWindow();
}

export default createMainWindow;
