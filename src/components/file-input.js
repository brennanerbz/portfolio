import React  from 'react';

export default React.createClass({
	displayName: 'FileInput',

	render() {
		const { name } = this.props;
		return(
			<input
				{...this.props}
				name={name}
				type="file"
				onChange={this.props.handleUpload}
			/>
		);
	}
});