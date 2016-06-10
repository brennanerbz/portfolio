import React  from 'react';
import TextInput from '../components/text-input';
import TextArea from '../components/text-area';
import RadioOptionsList from '../components/radio-options-list';

export default React.createClass({
	displayName: 'HireMe',

	getInitialState() {
		return {
			options: {
				name: 'Budget',
				list: [
					{name: 'small', value: '$5,000 - $10,000'},
					{name: 'mid', value: '$10,000 - $20,000'},
					{name: 'large', value: '$20,000 +'}
				]
			}
		}	
	},

	render() {
		const { options } = this.state;
		return(
			<div className="hire-me small-container">
				<div className="form-card margin-small mt mr mb ml no-margin-on-mobile nmr nml">
					<div className="form-body padding-small pt pr pb pl">
						<h1 className="hire-message text-center no-margin no-padding">Let's work together</h1>
						<p className="text-center grey no-margin no-padding">I also cook cheeseburgers</p>
						<form className="hire-form padding-small pr pb pl">
							<TextInput label={true} name="Name"/>
							<TextInput label={true} name="Email"/>
							<TextInput label={true} name="Company"/>
							<RadioOptionsList 
								label={true} 
								name={options.name} 
								options={options.list}/>
							<TextArea label={true} name="Description"/>
							<button type="text" 
							className="button big confirm bold all-caps margin-small mt">
								Hire Me
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
});
