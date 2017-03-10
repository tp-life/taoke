
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const session = require('./session');
module.exports = {
    //窗口内容发生变化
    onWindowChange: function (event, arg) {
        session.getToken();
    },
    //获取cookie
    onGetSession: function (event) {
        if (global.cookies.length < 1) {
            this.onWindowChange();
        }
        event.sender.send('revc', global.cookies)
        return global.cookies;
    },
    //获取系统信息
    onGetOsInfo: function (event, arg) {
        var os = require('os');
        var osInfo = {
            arch: os.arch(),//CPU处理器架构
            cpus: os.cpus(),//获取cpu信息
            //空闲内存字节
            freemem: os.freemem(),
            //当前登录用户的根目录
            homedir: os.homedir(),
            //操作系统主机名
            hostname: os.hostname(),
            //网络配置列表
            networkInterfaces: os.networkInterfaces(),
            //操作系统类型, 返回值有'darwin', 'freebsd', 'linux', 'sunos' , 'win32'
            platform: os.platform(),
            //操作系统版本
            release: os.release(),
            //操作系统临时文件的默认目录
            tmpdir: os.tmpdir(),
            //系统总内存
            totalmem: os.totalmem(),
            //操作系统名称，基于linux的返回linux, 基于苹果的返回Darwin, 基于windows的返回Windows_NT
            type: os.type(),
            //计算机正常运行时间
            uptime: os.uptime()
        };
        event.sender.send('onRecv_getOs', osInfo);
    },
    //打开新的窗口
    onOpenWindw: function (event, a) {
        if (a && a.url) {
            var win = new BrowserWindow({
                width: a.w, height: a.h,
                autoHideMenuBar: true,
                maxWidth: 1200,
                maxHeight: 800,
                resizable: false,
                maximizable: false,
                title: '',
                minimizable: false,
                allowDisplayingInsecureContent: true,
                alwaysOnTop: true
            })
            win.loadURL(a.url);
        }
      
    },
    openLogin:function(event, a){
        var win = new BrowserWindow({
                width: a.w, height: a.h,
                autoHideMenuBar: true,
                maxWidth: 1200,
                maxHeight: 800,
                resizable: false,
                maximizable: false,
                title: '',
                minimizable: false,
                allowDisplayingInsecureContent: true,
                alwaysOnTop: true
            })
            win.loadURL('file://'+__dirname+'/../ui/login.html');
    }
};
