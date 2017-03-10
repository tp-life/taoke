import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import '../../css/header.css';
const { SubMenu } = Menu;
const { Header } = Layout;
class Top extends React.Component {
	render() {
		return (
			<Header className="header">
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					style={{ lineHeight: '64px' }}
				    >
					
				</Menu>
			</Header>
        )
	}
}
export default Top;