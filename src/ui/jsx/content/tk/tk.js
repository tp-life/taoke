import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';
const ipcRenderer = require('electron').ipcRenderer;
class TK extends Component {
    constructor() {
        super();
        this.state = {
            url: 'https://login.taobao.com/member/login.jhtml?style=mini&newMini2=true&css_style=alimama&from=alimama&redirectURL=http%3A%2F%2Fwww.alimama.com&full_redirect=true&disableQuickLogin=true',
            visible: false
        };
    }


    showModal() {
        this.setState({
            visible: true,
        });

    }
    handleOk() {
        this.setState({
            visible: false,
        });
    }
    handleCancel() {
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {

    }
    componentDidUpdate() {
        let webview = this.refs.webview_win;
        webview.addEventListener('new-window', function (e) {
            require('electron').shell.openExternal(e.url);
        });
        webview.addEventListener('will-navigate', function () {
            ipcRenderer.send('get_ses');
            ipcRenderer.on('revc', function (e, d) { console.log(d, '1') });
        })
    }

    //打开登录窗口
    openWindow() {
        ipcRenderer.send('openWindow', { w: 450, h: 350 });
    }

    render() {
        return (<div>
            <Button type="primary" onClick={this.openWindow.bind(this)} >登录阿里账号</Button>
            <Modal title="Modal" visible={this.state.visible}
                onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
                okText="OK" cancelText="Cancel"
            >
                <webview id="foo" ref="webview_win" src={this.state.url} style={{ width: '400px', height: '300px' }} allowpopups="on" plugins="on" nodeintegration="on" plugins="on" ></webview>
            </Modal>
        </div>);
    }
}
export default TK;