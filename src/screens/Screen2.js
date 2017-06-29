import React, { Component } from 'react';

class Screen2 extends Component {

	componentWillMount() {
		this.props.eventEmitter.emit("navigateScreen", {screenIndex: 2})
	}

	render() {
		return (
			<div className="screen screen2">
				<h1>SCREEN 2 DATA</h1>
			</div>
		)
	}
}

export default Screen2;