import React  from 'react';

export default React.createClass({
	displayName: 'TextInput',

	render() {
		const { label } = this.props || false;
		const { name } = this.props;
		return(
			<div className="text-input margin-small mt">
				{	
					label &&
					<label 
						className="form-input-label grey" 
						htmlFor={name}>
						{name}
					</label>
				}
				<input 
					required
					type="text" name={name} 
					className="form-input"/>
			</div>
		);
	}
});