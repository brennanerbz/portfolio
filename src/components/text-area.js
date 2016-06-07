import React  from 'react';

export default React.createClass({
	displayName: 'TextArea',

	render() {
		const { size } = this.props || 140;
		const { label } = this.props || false;
		const { name } = this.props;
		return(
			<div className="text-area margin-small mt">
				{	
					label &&
					<label className="form-input-label grey" htmlFor={name}>
						{name}
					</label>
				}
				<textarea 
					required
					style={{minHeight: size}}
					type="text" 
					name={name} 
					className="form-area"/>
			</div>
		);
	}
});
