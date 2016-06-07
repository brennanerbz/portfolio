import React  from 'react';
import CategoryList  from '../components/category-list';
import Card  from '../components/card';

export default React.createClass({
	displayName: 'Home',

	render() {
		const arr = new Array.from({length: 9});
		return(
			<div className="container group">
				<div className="col span-1-of-4 hide-on-mobile padding-small pl" style={{paddingRight: '0'}}>
					<CategoryList/>
				</div>
				<div className="col span-3-of-4 no-padding">
					<div className="group">
						{
							arr.map(function(item) {
								return <Card/>
							})
						}
					</div>
				</div>
			</div>
		);
	}
});	
