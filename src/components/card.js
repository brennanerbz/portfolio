import React  from 'react';

export default React.createClass({
	displayName: 'Card',

	render() {
		const { project } = this.props;
		return(
			<a href={`/work/${project.name}`} className="card flex-third">
				<div className="project-img padding-small pt pr pb pl">
					<div className="img-background">
						
					</div>
				</div>
				<div className="project-info">
					<div className="padding-small pr pb pl">
						<div className="project-name bold">{project.name}</div>
						<div className="project-info">{project.slug}</div>
					</div>
				</div>
			</a>
		);
	}
});