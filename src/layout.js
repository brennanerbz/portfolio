import React  from 'react';
import NavHelper from './components/nav-helper';

export default React.createClass({
	displayName: 'Layout',

	render() {
		return(
			<NavHelper>
				{this.props.children}
			</NavHelper>
		);
	}
});