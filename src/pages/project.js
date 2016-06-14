import React  from 'react';
import app from 'ampersand-app';
import axios from 'axios';
import ProjectHeading from '../components/project-heading';
import ProjectMarkdown from '../components/project-markdown';

export default React.createClass({
	displayName: 'Project',

	getInitialState() {
		return {
			project: {}
		}
	},

	componentDidMount() {
		var self = this;
		var { name } = this.props;
		axios
		.get(app.apiUrl + `/projects/${name}`)
		.then(function(result) {
			console.log(result)
			self.setState({
				project: result.data
			});
		})
		.catch(function(err) {
			console.error(err)
		})
	},

	render() {
		const { project } = this.state;
		return(
			<div className="container">
				<div className="project-content margin-small mt ml mr mb no-margin-on-mobile nmr nml">
					<div className="project-body padding-med pt pr pb pl">
						<a href={`/edit/${project.name}`}>Edit</a>
						<ProjectHeading
							project={project}
						/>
						<div className="margin-small mt">
							<ProjectMarkdown
								input={project.markdown}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});