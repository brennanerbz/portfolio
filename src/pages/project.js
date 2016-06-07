import React  from 'react';
import ProjectHeading from '../components/project-heading';

export default React.createClass({
	displayName: 'Project',

	render() {
		return(
			<div className="container">
				<div className="project-content margin-small mt ml mr mb">
					<div className="project-body padding-med pt pr pb pl">
						<ProjectHeading/>
					</div>
				</div>
			</div>
		);
	}
});