import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import OS from './main/osInfo';
import MainAction from './main/mainAction';
import TK from './tk/tk';
const { Content } = Layout;
class TkContent extends React.Component {

	constructor() {
		super();
		this.state = {
			views: 'tk'
		}
		this.setViewShow = this.setViewShow.bind(this);
	}

	setViewShow(view) {
		let tempState = this.state;
		tempState.views = view;
		this.setState(tempState);
	}

	getView() {
		let showViews = this.state.views;
		switch (showViews) {
			case 'tk':		
				return <TK />;
			default:
				return (
					<div>
						<MainAction bg="#32c5d2" onClick={this.setViewShow.bind(this,'tk')}  >高佣申请 </MainAction>
						<MainAction bg="#9B59B6" >链接转换 </MainAction>
						<MainAction bg="#E35B5A" >CMS设置 </MainAction>
						<MainAction bg="#E1E5EC" >商品发布 </MainAction>
						<OS />
					</div>
				)
		}
	}

	render() {
		return (
			<Content style={{ padding: '0 50px', background: 'rgb(255, 255, 255)' }}>
				<div style={{ width: '80%', margin: '30px auto' }}>
					{this.getView()}
				</div>
			</Content>
		)
	}
}
export default TkContent;