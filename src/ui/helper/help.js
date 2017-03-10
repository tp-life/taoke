const ipcRenderer = require('electron').ipcRenderer;

module.exports ={
    send:function(func,event,arg){
        ipcRenderer.send(event,arg); 
        if(typeof func ==='function'){
            ipcRenderer.on('onRecv_'+event,func);
        }  
    }
}
