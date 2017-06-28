import React, {Component} from 'react';

class Nav extends Component {

	constructor(props) {
		super(props);

		this.baz = this.baz.bind(this);
	}

	baz(index) {
		this.props.bar(index);
	}

	render() {
		return (
			<div className="app-nav">
				<div 
					className={this.props.screenIndex === 1 ? "nav-item screen1 active-nav" : "nav-item screen1"}
					onClick={() => {this.baz(1)}}>
					<p>screen 1</p>
				</div>
				<div 
					className={this.props.screenIndex === 2 ? "nav-item screen2 active-nav" : "nav-item screen2"}
					onClick={() => {this.baz(2)}}>
					<p>screen 2</p>
				</div>
				<div 
					className={this.props.screenIndex === 3 ? "nav-item screen3 active-nav" : "nav-item screen3"}
					onClick={() => {this.baz(3)}}>
					<p>screen 3</p>
				</div>
			</div>
		)
	}
}

export default Nav;