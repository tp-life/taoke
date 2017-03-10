import React, { Component } from 'react';
import { Layout } from 'antd';
import Top from './header/header';
import TkFooter from './footer/footer';
import TkContent from './content/content';
class Main extends React.Component {
	render() {
		return (<Layout style={{ width: '100%', height: '100%' }}>
			<Top />
			<TkContent />
			<TkFooter />
		</Layout>)
	}
}
export default Main;