import React  from 'react';

export default React.createClass({
	displayName: 'SelectTagList',

	render() {
		const { categories } = this.props;
		const { tags } = this.props;
		return(
			<div className="margin-small mt mt">
				{
					categories.map((category, i) => {
						const active = tags && tags.indexOf(category) !== -1;
						return (
							<span 
								key={i}
								onClick={() => {
									if(!active) {
										this.props.handleClick(category)
									}
								}}
								style={{
									background: active ? '#56AF41' : '#fafafa', 
									borderRadius: '4px',
									display: 'inline-block',
									color: active ? '#fff' : '#333'
								}}
								className="padding-small pt pr pb pl
										   margin-tiny mr mb
										   pointer">
								{category}
							</span>
						)
					})
				}
			</div>
		);
	}
});