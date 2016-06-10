import React  from 'react';
import ProcessFile from '../helpers/process-file';
import Vibrant from 'node-vibrant';

export default React.createClass({
	displayName: 'Card',

	getInitialState() {
		return {
			imageColor: ''
		}		
	},

	componentDidMount() {
		var self = this;
		let photo = this.props.project.coverPhoto;
		if(typeof photo === 'string') {
			let v = new Vibrant(photo);
			v.getPalette(function(e, palette) {
				console.log(palette)
				self.setState({
					imageColor: palette.Vibrant.rgb
				});
			})	
		}
	},

	render() {
		const { project } = this.props;
		let { imageColor } = this.state || [];
		let color = '';
		if(imageColor) {
			color = 'rgba(' + imageColor.join(',') + ',100' + ')'
		}
		return(
			<a 
				href={`/work/${project.name}`} 
				className="card flex-third no-underline">
				<div className="project-img padding-small pt pr pb pl">
					<div 
						style={{background: color}} 
						className="img-background"></div>
					<div className="img-background mix"></div>
					<img 
						className="app-img quiet-shadow" 
						src={project.coverPhoto}/>
				</div>
				<div className="project-info">
					<div className="padding-small pt pr pb pl">
						<div className="project-name black bold">{project.name}</div>
						<div className="project-info grey">{project.slug}</div>
					</div>
				</div>
			</a>
		);
	}
});