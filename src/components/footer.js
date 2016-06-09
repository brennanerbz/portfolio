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
						<ul className="links flat margin-small mr">
							<li>
								<a className="grey padding-small pr">
									Email
								</a>
							</li>
							<li>
								<a className="twitter padding-small pr">
									Twitter
								</a>
							</li>
							<li>
								<a className="instagram">
									Instagram
								</a>
							</li>
							<li>
								<a className="github padding-small pl">
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