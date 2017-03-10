
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const shell = electron.shell;

var Server = {
  //初始化
  init: function () {
    this.web = this.web ? this.web : new BrowserWindow({ width: 1200, height: 800, autoHideMenuBar: true, maxWidth: 1200, maxHeight: 800,resizable:false,maximizable:false });
    this.option = {
      win_url: '',
      shell_url: ''
    }
  },
  //当前窗口打开页面
  createWidonw: function (url) {
    this.win_url = url;
    this.web.loadURL(url);
  },
  //清楚当前页面
  clearWindow: function () {
    this.web = null;
    this.option = {
      win_url: '',
      shell_url: ''
    }
  },
  //窗口发生改变事件函数
  hanldeWillNavigate: function () {

  },
  //在外部浏览器打开页面
  openShellUrl: function (url) {
    this.shell_url = url;
    shell.openExternal(url);
  },
  //获取当前窗口内容对象
  getWebContent: function () {
    return this.web.webContents;
  },
  //获取当前窗口对象
  getWeb: function () {
    return this.web;
  },
  //打开新的窗口
  openNewWindow:function(url,w,h)
  {
    window.open(url);
  }
}

module.exports = Server;