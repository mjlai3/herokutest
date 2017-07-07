import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Nav from './components/Nav';
import {EventEmitter} from 'events';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './styles/app.css';

let eventEmitter = null

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			screenIndex: 1
		}
	}

	componentWillMount() {
		eventEmitter = new EventEmitter();

		eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
			this.updateScreen({newScreenIndex: screenIndex});
		});
	}

	// unregister all references here when it is no longed used
	componentWillUnmount() {
		eventEmitter.remove()
	}

	updateScreen({newScreenIndex}) {
		this.setState({screenIndex: newScreenIndex})
	}

	render() {
		return (
			<div className="app">
				<div className="app-header"></div>
				<div className="app-wrapper">
					<Nav
						eventEmitter={eventEmitter}
						screenIndex={this.state.screenIndex} />
					<div className="main-content">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<BrowserRouter>
		<App>
			<Switch>
				<Route path="/screen1" render={ (props) => <Screen1 eventEmitter={eventEmitter} {...props} /> } />
				<Route path="/screen2" render={ (props) => <Screen2 eventEmitter={eventEmitter} {...props} /> } />
				<Route path="/screen3" render={ (props) => <Screen3 eventEmitter={eventEmitter} {...props} /> } />
			</Switch>
		</App>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
