import React, { Component } from 'react';
import '../../../css/main.css';
class MainAction extends Component {
    constructor() {
        super();

    }

    handleClick(){
        this.props.onClick()
    }

    render() {
        return (
            <div style={{ padding: '8px',float:'left',margin:'30px 15px ' }} onClick={this.handleClick.bind(this)}>
                <a href={this.props.url} style={{
                    width: '150px',
                    height: '150px',
                    background: this.props.bg,
                    lineHeight: '150px',
                    fontSize: '20px',
                    display: 'block',
                    borderRadius:'2px',
                    textAlign:'center',
                    color:'#ffffff'
                }}>{this.props.children}</a>
            </div>
        )
    }
}
MainAction.bg = '';
MainAction.text = '';
export default MainAction;