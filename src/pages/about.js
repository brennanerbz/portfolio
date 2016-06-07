import React  from 'react';

export default React.createClass({
	displayName: 'About',

	render() {
		return(
			<div className="container">
				<div className="about-content margin-small mt ml mr mb">
					<div className="about-body padding-med pt pr pb pl">
						<div className="profile-pic-circle">
							<div className="profile-img">
							</div>
						</div>
						<div className="info">
							<p className="about-info">
								I'm a husband, dad and designer living in Orange County California. You can find me on Dribbble, Twitter, Instagram and LinkedIn if you'd like. I do enjoy taking a good photo or two. I've led design at multiple startups since 2009. 

								I've also had the honor of being named one of the Top 75 Designers in Technology for 2013 (by Business Insider). 

								I've designed numerous iOS apps that have been selected by Apple as New and Noteworthy with thousands and thousands of 5-star reviews.

								I love design, business strategy and product.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
