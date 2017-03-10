import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../../css/main.css';
const help = require('../../../helper/help');
class OsInfo extends Component {
    constructor() {
        super();
        this.state = {
            arch: '',//CPU处理器架构
            cpus: [],//获取cpu信息
            freemem: '',
            homedir: '',
            hostname: '',
            platform: '',
            release: '',
            tmpdir: '',
            totalmem: '',
            type: '',
        }
        this.ipcGetInfo = this.ipcGetInfo.bind(this);
    }
    //获取系统信息回调
    ipcGetInfo(e, d) {
        let old = this.state;
        this.setState(d);
    }
    //挂载组件前获取系统信息
    componentWillMount() {
        help.send(this.ipcGetInfo, 'getOs');
    }

    //计算具体内存信息
    getFreemem(free){
        return (free/1024/1024/1024).toFixed();
    }
    render() {
        return (
            <div style={{float:'left',marginTop:'60px',width:'100%',clear:'both'}}>
            <div className="osinfo" style={{clear:'both'}}>
                <Row gutter={16} >
                    <Col className="gutter-row" span={3}>
                        <div className="gutter-box">操作系统：</div>
                    </Col>
                    <Col span={12}>
                        <div className="gutter-box">{this.state.type}&nbsp;{this.state.platform}（{this.state.arch}）&nbsp;{this.state.cpus.length > 0?this.state.cpus[0].model:''}</div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={3}>
                        <div className="gutter-box">CPU核心数：</div>
                    </Col>
                    <Col span={12}>
                        <div className="gutter-box"> {this.state.cpus.length} 个</div>
                    </Col>
                </Row>
                <Row gutter={16} >
                    <Col className="gutter-row" span={3}>
                        <div className="gutter-box">安装内存：</div>
                    </Col>
                    <Col span={12}>
                        <div className="gutter-box">{this.getFreemem(this.state.totalmem)} G&nbsp;</div>
                    </Col>
                </Row>
                <Row gutter={16} >
                    <Col className="gutter-row" span={3}>
                        <div className="gutter-box">当前剩余内存：</div>
                    </Col>
                    <Col span={12}>
                        <div className="gutter-box">{this.getFreemem(this.state.freemem)} G&nbsp;</div>
                    </Col>
                </Row>
                <Row gutter={16} >
                    <Col className="gutter-row" span={3}>
                        <div className="gutter-box">主机名称：</div>
                    </Col>
                    <Col span={12}>
                        <div className="gutter-box">{this.state.hostname}&nbsp;</div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={3}>
                        <div className="gutter-box">工作目录：</div>
                    </Col>
                    <Col span={12}>
                        <div className="gutter-box"> {this.state.homedir} </div>
                    </Col>
                </Row>
                </div>
            </div>
        )
    }
}
export default OsInfo;