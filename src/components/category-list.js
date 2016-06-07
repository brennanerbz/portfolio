import React  from 'react';
import CategoryListItem from './category-list-item';

export default React.createClass({
	displayName: 'CategoryList',
	getInitialState() {
		return {
			categories: [
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
	render() {
		let { categories } = this.state;
		categories = categories.sort();
		return(
			<div className="category-list" style={{marginLeft: '-0.5em'}}>
				<h1 className="list-heading no-margin black padding-tiny pt pb" 
					style={{paddingLeft: '0.35em', paddingRight: '0.35em'}}>
					Categories
				</h1>
				<ul className="links up no-padding no-margin">
					{categories.map((item) => {
						return <CategoryListItem item={item}/>
					})}
				</ul>
			</div>
		);
	}
});