import React  from 'react';
import RadioOption from './radio-option';

export default React.createClass({
	displayName: 'RadioOptionsList',

	getInitialState(){
		return {
			checked: 0
		}
	},

	handleChecked(index) {
		this.setState({
			checked: index
		});
	},

	render() {
		const { checked } = this.state;
		const { label } = this.props || false;
		const { name } = this.props;
		const { options } = this.props;
		return(
			<div className="radio-options-list margin-small mt">
				{	
					label &&
					<label 
						className="form-input-label grey" 
						for={name}>
						{name}
					</label>
				}
				{
					options && options.map((option, i) => {
						return (
							<RadioOption
								name={option.name}
								value={option.value}
								checked={checked === i}
								index={i}
								handleChecked={this.handleChecked}
							/>
						);
					})
				}
			</div>
		);
	}
});