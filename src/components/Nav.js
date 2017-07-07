import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="app-nav">
				<NavLink to="/screen1" className="nav-item">screen 1</NavLink>
				<NavLink to="/screen2" className="nav-item">screen 2</NavLink>
				<NavLink to="/screen3" className="nav-item">screen 3</NavLink>
			</div>
		)
	}
}

export default Nav;