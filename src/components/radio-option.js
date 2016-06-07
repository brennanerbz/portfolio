import React  from 'react';

export default React.createClass({
	displayName: 'RadioOption',

	render() {
		const { name } = this.props;
		const { value } = this.props;
		const { checked } = this.props;
		const { index } = this.props;
		return(
			<span 
				onClick={() => this.props.handleChecked(index)}
				className="option margin-med mr pointer">
				<input 
					className="pointer"
					checked={checked}
					type="radio" 
					name={name}
					value={value}/>
				<label 
					className={`radio-label padding-tiny pl pointer ${checked ? 'black' : 'grey'}`} 
					for={name}>
				{value}
				</label>
			</span>
		);
	}
});