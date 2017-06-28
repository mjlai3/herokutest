import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Nav from './components/Nav';
import './styles/app.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			screenIndex: 1
		}

		this.foo = this.foo.bind(this);
	}

	foo(index) {
		this.setState({screenIndex: index})
	}

	updateScreen({newScreenIndex}) {
		this.setState({screenIndex: newScreenIndex})
	}

	render() {
		var ActiveScreen;

		if (this.state.screenIndex === 1) {
			ActiveScreen = <Screen1 />
		}

		if (this.state.screenIndex === 2) {
			ActiveScreen = <Screen2 />
		}

		if (this.state.screenIndex === 3) {
			ActiveScreen = <Screen3 />
		}

		return (
			<div className="app">
				<div className="app-header"></div>
				<div className="app-wrapper">
					<Nav bar={this.foo} state={this.state.screenIndex} />
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
