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
					value={this.props.value}
					onChange={this.props.handleChange}
					required
					type={this.props.type || 'text'}
					name={name} 
					className="form-input"/>
			</div>
		);
	}
});