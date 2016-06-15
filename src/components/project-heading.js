import React  from 'react';
import moment from 'moment';

export default React.createClass({
	displayName: 'ProjectHeading',

	render() {
		const { project } = this.props;
		return(
			<div className="project-heading">
				<p className="project-meta all-caps">
					<span className="project-date grey">
						{moment(project.date).format('ll')} 
					</span>
				</p>
				<h1 className="project-title block black bold">
					{project.name}
				</h1>
				<p className="project-slug grey">
					{project.slug}
				</p>
			</div>
		);
	}
});

//<span className="reading-time red">&nbsp;3 min</span>