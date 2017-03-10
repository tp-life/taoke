var React = require('react');
var ReactDOM = require('react-dom');

var SecurityChooser = React.createClass({
	clickHandle: function () {

	},
	defaultStyle: function () {
		return 'allowpopups'
	},
	componentDidMount: function () {
		let webview = this.refs.webview_win;
		webview.addEventListener('new-window', function (e) {
			require('electron').shell.openExternal(e.url);
		});
		webview.addEventListener('will-navigate', function () {
			const ipcRenderer = require('electron').ipcRenderer;
			console.log('change');
			ipcRenderer.send('get_ses');
			ipcRenderer.on('revc',function(e,d){console.log(d,'1')});
		})
	},
	render: function () {
		return (<div>
					<webview id="foo" ref="webview_win" src="http://alimama.com" style={{ width: '1200px', height: '600px' }} allowpopups="on" plugins="on" nodeintegration="on" plugins="on" ></webview>
				</div>);
	}
});
module.exports = SecurityChooser;