import React  from 'react';

export default React.createClass({
	displayName: 'Link',

	getInitialState() {
		return {
			active: false
		}
	},

	componentDidMount(props) {
		const {active} = this.props;
		if(active) this.setState({
			active: true
		});
	},

	componentWillReceiveProps(nextProps) {
		const {active} = this.props;
		const nextActive = nextProps.active;
		if(!active && nextActive) {
			this.setState({
				active: true
			}) 
		} else if (active && !nextActive) {
			this.setState({
				active: false
			}) 
		}
	},

	render() {
		const { active } = this.state;
		const { className } = this.props;
		const { activeClass } = this.props;
		const { idleClass } = this.props;
		const { label } = this.props;
		const { to } = this.props;
		return(
			<a className={className + ' ' + (active ? activeClass : idleClass)} 
				href={to}
				onClick={() => {

					this.props.handleChangeRoute &&
					this.props.handleChangeRoute(to)
					
					this.props.handleClick &&
					this.props.handleClick(label)

				}}>
				{label}
			</a>
		);
	}
});