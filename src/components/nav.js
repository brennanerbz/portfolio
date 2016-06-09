import React  from 'react';
import app from 'ampersand-app';
import Logo from './logo';
import Link from './link';

export default React.createClass({
	displayName: 'Nav',

	getInitialState() {
		return {
			activeRoute: app.router.history.location.pathname
		}	
	},

	componentDidMount() {
		const pathname = app.router.history.location.pathname;
		this.setState({
			activeRoute: pathname
		});
	},

	componentWillReceiveProps(nextProps) {
		const { activeRoute } = this.state;
		const nextRoute = nextProps.router.history.location.pathname;
		if(activeRoute !== nextRoute) {
			this.setState({
				activeRoute: nextRoute
			});
		}
	},

	changeRoute(pathname) {
		// this.setState({
		// 	activeRoute: pathname
		// });
	},

	render() {
		const { activeRoute } = this.state;
		return(
			<nav className="nav">
				<div className="container group">
					<div className="float-left nav-logo margin-small ml">
						<Logo/>
					</div>
					<div className="float-right nav-links">
						<ul className="links flat margin-small mr">
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
					</div>
				</div>
			</nav>
		);
	}
});