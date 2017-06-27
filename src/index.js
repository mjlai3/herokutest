import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import './styles/app.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			screenIndex: 1
		}
	}

	updateScreen({newScreenIndex}) {
		this.setState({screenIndex: newScreenIndex})
	}

	render() {
		var ActiveScreen;

		if (this.state.screenIndex == 1) {
			ActiveScreen = <Screen1 />
		}

		if (this.state.screenIndex == 2) {
			ActiveScreen = <Screen2 />
		}

		if (this.state.screenIndex == 3) {
			ActiveScreen = <Screen3 />
		}

		return (
			<div className="app">
				<div className="app-header"></div>
				<div className="app-wrapper">
					<div className="app-nav">
						<div 
							className="nav-item screen1"
							onClick={() => {this.updateScreen({newScreenIndex: 1, anotherArg: 'something'})}}>
							<p>screen 1</p>
						</div>
						<div 
							className="nav-item screen2"
							onClick={() => {this.updateScreen({newScreenIndex: 2, anotherArg: 'something'})}}>
							<p>screen 2</p>
						</div>
						<div 
							className="nav-item screen3"
							onClick={() => {this.updateScreen({anotherArg: 'something', newScreenIndex: 3})}}>
							<p>screen 3</p>
						</div>
					</div>
					<div className="main-content">
						{ActiveScreen}
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<App>

	</App>,
	document.getElementById('root')
);
registerServiceWorker();
