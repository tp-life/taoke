'use strict';

const electron = require('electron');
const svc = require('./backend/service');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const ipcMain = require('./backend/regierIpc');
const ipcFun = require('./backend/ipcCallback');
global.cookies={}
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.


// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  svc.init();
  // Create the browser window.
  // mainWindow = new BrowserWindow({width: 1200, height: 600});

  // and load the index.html of the app.
  var url = 'file://' + __dirname + '/index.html';
  // url ='http://login.taobao.com/member/login.jhtml?style=mini&newMini2=true&css_style=alimama&from=alimama&redirectURL=http%3A%2F%2Fwww.alimama.com&full_redirect=true&disableQuickLogin=true';
  svc.createWidonw(url);
  var w =svc.getWebContent();
  // Open the DevTools.
  w.openDevTools();

  // Emitted when the window is closed.
  w.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    svc.clearWindow();
  });

  w.on('will-navigate',function(){
     svc.hanldeWillNavigate();
  })


  w.on('new-window',function(event,url){
    // event.preventDefault()
    //  w.loadURL(url);
    })
});

ipcMain.regServer({
  'get_ses':ipcFun.onWindowChange,
  'getOs':ipcFun.onGetOsInfo,
  'openWindow':ipcFun.onOpenWindw,
})