import React  from 'react';
import axios from 'axios';
import CategoryList  from '../components/category-list';
import CollapsingList  from '../components/collapsing-link-list';
import Card  from '../components/card';

export default React.createClass({
	displayName: 'Home',

	getInitialState() {
		return {
			projects: [],
			categoryMenuOpen: false
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
								activeRoute={null}
								menu="categories"
								links={['one', 'two', 'three']}
								className=""
								activeClass="black bold"
								idleClass="grey"
								fontSize="16"
								handleClick={(route) => {
									this.setState({
										activeRoute: route,
										categoryMenuOpen: false
									})}
								}
							/>
						}
					</div>
				</div>
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
