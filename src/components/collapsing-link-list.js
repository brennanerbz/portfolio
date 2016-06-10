import React  from 'react';
import Link from './link';

export default React.createClass({
	displayName: 'CollapsingLinkList',

	render() {
		const { links } = this.props;
		const { activeRoute } = this.props;
		const { activeCategory } = this.props;
		const { menu } = this.props;
		const { fontSize } = this.props;
		return(
			<ul 
				className="links up 
						   border bt bg
						   text-center
						   no-margin no-padding">
				{
					links.map((link, i) => {
						const label = link;
						let to = '/' + link.toLowerCase()
											.split(' ')
											.join('-');
						console.log(to)
						let active = false;
						if(to.match(/work/g) && (activeRoute === '' || activeRoute.match(/work/g))) {
							active = true;
						} else if (activeRoute === to) {
							active = true
						}
						if(activeCategory) {
							active = activeCategory === label;
						}
						return ( 
							<li 
								key={i}
								style={{
									paddingBottom: ((
										menu === 'nav' 
										&& i === links.length - 1) ? '0.5em' : '')
								}}
								className={`padding-small pt pl pb pr font-${fontSize}`
										   + ' ' + (i !== 0 ? 'border bt bg' : '')}>
								<Link
									to={menu === 'categories' ? '/' : to}
									label={label}
									active={active}
									activeClass={this.props.activeClass}
									idleClass={this.props.idleClass}
									handleClick={this.props.handleClick}
								/>
							</li>
						);
					})
				}
			</ul>
		);
	}
});