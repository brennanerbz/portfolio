import React  from 'react';
import Link from './link';

export default React.createClass({
	displayName: 'Logo',

	render() {
		const hamburger = require('../images/hamburger.png');
		return(
			<a href="/">
				<div className="logo group">
					<div className="float-left">
						<img className="logo-icon" src={hamburger}/>
					</div>
					<div className="float-left">
						<div className="margin-small ml">
							<h2 className="no-padding no-margin logo-name black">Brennan Erbeznik</h2>
							<p className="no-padding no-margin logo-title grey">Front End / UX Engineer</p>
						</div>
					</div>
				</div>
			</a>
		);
	}
});