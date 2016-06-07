import React  from 'react';

export default React.createClass({
	displayName: 'Card',

	render() {
		return(
			<a className="card flex-third">
				<div className="project-img">
					
				</div>
				<div className="project-info">
					<div className="padding-small pt pr pb pl">
						<div className="project-name">Name</div>
						<div className="project-info">Info</div>
					</div>
				</div>
			</a>
		);
	}
});