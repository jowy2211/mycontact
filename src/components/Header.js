import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<div className="item">
				<Link to="/" className="ui header"><h1>MyContact</h1></Link>
			</div>
		</div>
	);
};

export default Header;
