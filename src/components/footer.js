import React  from 'react';

export default React.createClass({
	displayName: 'Footer',

	render() {
		return(
			<footer className="footer">
				<div className="container group">
					<div className="float left not-on-mobile second center">
						<div className="margin-small ml mt mb padding-small pr">
							<p className="grey">&copy; Brennan Erbeznik 2012-2016</p>
						</div>
					</div>
					<div className="float right not-on-mobile first center">
						<ul className="links flat margin-small mr no-padding">
							<li>
								<a href="mailto:brennan.erbeznik@gmail.com" className="grey padding-small pr">
									Email
								</a>
							</li>
							<li>
								<a href="https://twitter.com/brennanerbz" className="twitter padding-small pr">
									Twitter
								</a>
							</li>
							<li>
								<a href="https://instagram.com/brennanerbz" className="instagram">
									Instagram
								</a>
							</li>
							<li>
								<a href="https://github.com/brennanerbz" className="github padding-small pl">
									Github
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
});