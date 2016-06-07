import React  from 'react';

export default React.createClass({
	displayName: 'ProjectHeading',

	render() {
		return(
			<div className="project-heading">
				<p className="project-meta all-caps">
					<span className="project-date grey">June 2, 2016 |</span>
					<span className="reading-time red">&nbsp;3 min</span>
				</p>
				<h1 className="project-title block bold">
					Nightly
				</h1>
				<p className="project-slug grey">
					An app that automates the way teachers create and grade homework and tests.
				</p>
			</div>
		);
	}
});