import React, { Component } from 'react';
import './user.scss';

class User extends Component {
	render() {
		return (
			<div className="user">
				{this.props.children}    
			</div>
		);
	}
}

export default User;
