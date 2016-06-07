import React  from 'react';

export default React.createClass({
	displayName: 'TextArea',

	render() {
		const { label } = this.props || false;
		const { name } = this.props;
		return(
			<div className="text-area margin-small mt">
				{	
					label &&
					<label className="form-input-label grey" for={name}>
						{name}
					</label>
				}
				<textarea 
					type="text" 
					name={name} 
					className="form-area padding-small pt pr pb pl"/>
			</div>
		);
	}
});
