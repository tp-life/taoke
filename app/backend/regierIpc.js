
const ipcMain = require('electron').ipcMain;
var reg ={
    regServer: function (handleevent) {
        if (typeof handleevent !== 'object') {
            return false;
        }
        for (var key in handleevent) {
            ipcMain.on(key, handleevent[key])
        }
    }
};
module.exports =  reg