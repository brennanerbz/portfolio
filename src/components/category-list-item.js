import React  from 'react';

export default React.createClass({
	displayName: 'CategoryListItem',

	render() {
		const { item } = this.props;
		return( 
			<li className="list-item">
				<a className="block padding-tiny pt pb dark-grey" 
					style={{paddingLeft: '0.5em', paddingRight: '0.5em'}}>
					{item}
				</a>
			</li>
		);
	}
});