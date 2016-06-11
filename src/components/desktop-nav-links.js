import React  from 'react';
import Link from './link';

export default React.createClass({
	displayName: 'DesktopNavLinks',

	render() {
		const { activeRoute } = this.props;
		return(
			<ul className="links flat margin-small mr hide-on-mobile">
				<li>
					<Link 
						className="margin-med mr padding-tiny pb"
						label="Work" 
						to="/" 
						active={activeRoute === '/' || activeRoute.match(/work/g)}
						idleClass="grey"
						activeClass="black border bb br"
						/>
				</li>
				<li>
					<Link 
						className="padding-tiny pb"
						label="About" 
						to="/about" 
						active={activeRoute === '/about'}
						idleClass="grey"
						activeClass="black border bb br"
						/>
				</li>
				<li>
					<Link 
						className="margin-med ml padding-tiny pb"
						label="Hire Me" 
						to="/hire-me" 
						active={activeRoute === '/hire-me'}
						idleClass="grey"
						activeClass="black border bb br"
						/>
				</li>
			</ul>
		);
	}
});