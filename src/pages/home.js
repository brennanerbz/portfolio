import React  from 'react';
import axios from 'axios';
import CategoryList  from '../components/category-list';
import Card  from '../components/card';

export default React.createClass({
	displayName: 'Home',

	getInitialState() {
		return {
			projects: []
		}
	},

	componentDidMount() {
		var self = this;
		axios
		.get('http://localhost:5100/api/v1/projects')
		.then(function(result) {
			self.setState({
				projects: result.data
			});
		})
		.catch(function(err) {
			console.error(err)
		})
	},

	render() {
		const { projects } = this.state;
		return(
			<div className="container group">
				<div className="col span-1-of-4 hide-on-mobile padding-small pl" style={{paddingRight: 0}}>
					<CategoryList/>
				</div>
				<div className="col span-3-of-4 no-padding">
					<div className="group">
						{
							projects.map((project, i) => {
								return (
									<Card
										key={i}
										project={project}
									/>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
});	
