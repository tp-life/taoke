
const session = require('./session');

module.exports = {
    onWindowChange: function (event, arg) {
        session.getToken();
        event.sender.send('revc', global.cookies)
    },

    onGetSession: function () {
        if (global.cookies.length < 1) {
            this.onWindowChange();
        }
        return global.cookies;
    },

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
    }
};
