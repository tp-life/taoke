const ses = require('electron').session;
module.exports = {
    getToken: function () {
        ses.defaultSession.cookies.get({
            name: '_tb_token_',
            domain: '.alimama.com'
        }, function (error, cookies) {
            if (error == null) {
                global.cookies = { '_token': cookies[0] }
            
            }
        });

    }
};