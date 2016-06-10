import React  from 'react';
import CategoryListItem from './category-list-item';

export default React.createClass({
	displayName: 'CategoryList',
	getInitialState() {
		return {
			
		}
	},
	render() {
		let { categories } = this.props;
		categories = categories.sort();
		return(
			<div className="category-list" style={{marginLeft: '-0.5em'}}>
				<h1 className="list-heading no-margin black padding-tiny pt pb" 
					style={{paddingLeft: '0.35em', paddingRight: '0.35em'}}>
					Categories
				</h1>
				<ul className="links up no-padding no-margin">
					{categories.map((item, i) => {
						return <CategoryListItem key={i} item={item}/>
					})}
				</ul>
			</div>
		);
	}
});