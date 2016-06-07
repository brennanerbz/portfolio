import React  from 'react';

export default React.createClass({
	displayName: 'RadioOption',

	render() {
		const { name } = this.props;
		const { value } = this.props;
		const { isChecked } = this.props;
		const { index } = this.props;
		return(
			<span 
				onClick={() => this.props.handleChecked(index)}
				className="option margin-med mr pointer">
				<input 
					className="pointer"
					onChange={() => {}}
					checked={isChecked}
					type="radio" 
					name={name}
					value={value}/>
				<label 
					className={`radio-label padding-tiny pl pointer ${isChecked ? 'black' : 'grey'}`} 
					htmlFo={name}>
				{value}
				</label>
			</span>
		);
	}
});