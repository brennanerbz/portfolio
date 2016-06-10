import React  from 'react';
import CategoryListItem from './category-list-item';

export default React.createClass({
	displayName: 'CategoryList',
	getInitialState() {
		return {
			categories: []
		}
	},
	componentDidMount() {
		let { categories } = this.props;
		categories = categories.sort();
		this.setState({
			categories: categories
		});
	},

	render() {
		const { categories } = this.props;
		const { activeCategory } = this.props;
		return(
			<div className="category-list" style={{marginLeft: '-0.5em'}}>
				<h1 className="list-heading no-margin black padding-tiny pt pb" 
					style={{paddingLeft: '0.35em', paddingRight: '0.35em'}}>
					Categories
				</h1>
				<ul className="links up no-padding no-margin">
					{categories.map((item, i) => {
						return (<CategoryListItem
							active={activeCategory === item}
							handleClick={(category) => {
								this.props.handleClick(category)
							}}
							key={i} 
							item={item}/>
						)})}
				</ul>
			</div>
		);
	}
});