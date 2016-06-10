import React  from 'react';

export default React.createClass({
	displayName: 'CategoryListItem',

	render() {
		const { item } = this.props;
		const { active } = this.props;
		return( 
			<li 
			onClick={() => this.props.handleClick(item)}
			className="list-item">
				<a className={'block padding-tiny pt pb' + ' ' + (active ? 'bold black' : 'dark-grey')}
					style={{paddingLeft: '0.5em', paddingRight: '0.5em'}}>
					{item}
				</a>
			</li>
		);
	}
});