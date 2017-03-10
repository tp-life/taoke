
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const shell = electron.shell;

var Server = {
  init: function () {
    this.web = this.web ? this.web : new BrowserWindow({ width: 1200, height: 800, autoHideMenuBar: true, maxWidth: 1200, maxHeight: 800 });
    this.option = {
      win_url: '',
      shell_url: ''
    }
  },
  createWidonw: function (url) {
    this.win_url = url;
    this.web.loadURL(url);
  },
  clearWindow: function () {
    this.web = null;
    this.option = {
      win_url: '',
      shell_url: ''
    }
  },
  hanldeWillNavigate: function () {

  },
  openShellUrl: function (url) {
    this.shell_url = url;
    shell.openExternal(url);
  },

  getWebContent: function () {
    return this.web.webContents;
  }
  ,
  getWeb: function () {
    return this.web;
  }
}

module.exports = Server;