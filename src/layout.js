import React  from 'react';
import NavHelper from './components/nav-helper';
import Nav from './components/nav';
import Footer from './components/footer';

export default React.createClass({
	displayName: 'Layout',

	render() {
		const { router } = this.props;
		return(
			<NavHelper>
				<Nav router={router}/>
				{this.props.children}
				<Footer/>
			</NavHelper>
		);
	}
});
