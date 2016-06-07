import React  from 'react';
import ProjectHeading from '../components/project-heading';
import ProjectMarkdown from '../components/project-markdown';

export default React.createClass({
	displayName: 'Project',

	render() {
		return(
			<div className="container">
				<div className="project-content margin-small mt ml mr mb">
					<div className="project-body padding-med pt pr pb pl">
						<ProjectHeading/>
						<ProjectMarkdown/>
					</div>
				</div>
			</div>
		);
	}
});