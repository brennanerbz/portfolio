import React  from 'react';
import Card  from '../components/card';

export default React.createClass({
	displayName: 'About',

	render() {
		const arr = new Array.from({length: 3});
		return(
			<div className="container">
				<div style={{marginTop: '8em', marginBottom: '2em'}} 
					className="about-content margin-small mt ml mr mb">
					<div className="about-body padding-med pt pr pb pl">
						<div className="profile-pic-circle block">
							<div className="profile-pic-img">
							</div>
						</div>
						<div className="info margin-large mt text-center">
							<h1 className="name black bold no-margin">Brennan Erbeznik</h1>
							<h3 className="title grey no-margin">Front End / UX Engineer</h3>
							<div className="about-bio margin-med mt padding-med pl pr">
								<p className="about-info">
									I'm a husband, dad and designer living in Orange County California. You can find me on Dribbble, Twitter, Instagram and LinkedIn if you'd like. I do enjoy taking a good photo or two. I've led design at multiple startups since 2009. 
								</p>
								<p className="about-info">
									I've also had the honor of being named one of the Top 75 Designers in Technology for 2013 (by Business Insider). 
								</p>
								<p className="about-info">
									I've designed numerous iOS apps that have been selected by Apple as New and Noteworthy with thousands and thousands of 5-star reviews.
								</p>
								<p className="about-info">
									I love design, business strategy and product.
								</p>
							</div>
							<div className="about-pics margin-med mt padding-med pl pr group">
								{
									arr.map(function(item, i) {
										return (
											<a key={i} className="card flex-third">
												{/* Instagram photos */}
											</a>
										);
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
