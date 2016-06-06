import React  from 'react';
import NavHelper from './components/nav-helper';
import Nav from './components/nav';
import Footer from './components/footer';

export default React.createClass({
	displayName: 'Layout',

	render() {
		return(
			<NavHelper>
				<Nav/>
				{this.props.children}
				<Footer/>
			</NavHelper>
		);
	}
});
