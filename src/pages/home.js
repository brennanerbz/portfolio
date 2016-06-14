import React  from 'react';
import app from 'ampersand-app';
import axios from 'axios';
import CategoryList  from '../components/category-list';
import CollapsingList  from '../components/collapsing-link-list';
import Card  from '../components/card';

export default React.createClass({
	displayName: 'Home',

	getInitialState() {
		return {
			projects: [],
			categoryMenuOpen: false,
			activeCategory: 'All',
			categories: [
				'All',
				'Web Design',
				'Web App Design',
				'Interaction Design',
				'Wireframes',
				'Mobile Web',
				'iOS Design',
				'Android Design',
				'Startup',
				'Photography',
				'Videography',
				'Film',
				'Music Video',
				'Commercial',
				'Front End Development',
				'Back End Development',
				'User Experience Design',
				'Branding',
				'Mobile Web Design'
			]
		}
	},

	componentDidMount() {
		var self = this;
		axios
		.get(app.apiUrl + '/projects')
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
		const { activeCategory } = this.state;
		return(
			<div className="container group margin-tiny mt no-margin-on-mobile nmt">
				<div className="show-on-mobile">
					<div className="card" style={{border: 'none'}}>
						<div 
							onClick={() => this.setState({categoryMenuOpen: !this.state.categoryMenuOpen})}
							className="padding-small pt pr pl pb group no-user-select">
							<div className="float-left semi-bold">View all categories</div>
							<div className="float-right">
								<span className={`font-22 octicon ${this.state.categoryMenuOpen ? 'octicon-chevron-down' : 'octicon-chevron-right'}`}>
								</span>
							</div>
						</div>
						{
							this.state.categoryMenuOpen
							&&
							<CollapsingList
								activeCategory={activeCategory}
								menu="categories"
								links={this.state.categories}
								className=""
								activeClass="black bold"
								idleClass="grey"
								fontSize="16"
								handleClick={(category) => {
									this.setState({
										activeCategory: category,
										categoryMenuOpen: false
									})}
								}
							/>
						}
					</div>
				</div>
				<div className="col span-1-of-4 hide-on-mobile padding-small pl" style={{paddingRight: 0}}>
					<CategoryList 
						activeCategory={activeCategory}
						categories={this.state.categories}
						handleClick={(category) => {
							this.setState({
								activeCategory: category
							});
						}}/>
				</div>
				<div className="col span-3-of-4 no-padding">
					<div className="group">
						{
							projects
							.filter((project) => {
								if(activeCategory !== 'All') {
									if(project.tags.indexOf(activeCategory) !== -1) return project;
								} else return project;
							})
							.sort((a, b) => {
								return new Date(b.date) - new Date(a.date);
							})
							.map((project, i) => {
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
