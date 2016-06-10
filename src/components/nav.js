import React  from 'react';
import app from 'ampersand-app';
import Logo from './logo';
import DesktopNavLinks from './desktop-nav-links';
import CollapsingLinks from './collapsing-link-list';

export default React.createClass({
	displayName: 'Nav',

	getInitialState() {
		return {
			activeRoute: app.router.history.location.pathname,
			navMenuOpen: false
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
				activeRoute: nextRoute,
				navMenuOpen: false
			});
		}
	},

	render() {
		const { activeRoute } = this.state;
		return (
			<nav className="nav">
				<div className="container group">
					<div className="float-left nav-logo margin-small ml">
						<Logo/>
					</div>
					<div className="float-right nav-links">
						<DesktopNavLinks
							activeRoute={activeRoute}
						/>
						<div 
							onClick={() => this.setState({navMenuOpen: !this.state.navMenuOpen})}
							className="show-on-mobile margin-small mr vertical-center-on-mobile pointer">
							<span 
							style={{fontSize: '32px'}}
							className="octicon octicon-three-bars">
							</span>
						</div>
					</div>
				</div>
				{
					this.state.navMenuOpen
					&&
					<div className="margin-small mt show-on-mobile">
						<CollapsingLinks
							activeRoute={activeRoute}
							menu="nav"
							links={['Work', 'About', 'Hire Me']}
							className=""
							activeClass="black bold"
							idleClass="grey"
							fontSize="18"
							handleClick={() => this.setState({navMenuOpen: false})}
						/>	
					</div>
				}
			</nav>
		);
	}
});