import React  from 'react';
import Card  from '../components/card';

export default React.createClass({
	displayName: 'About',

	getInitialState() {
		return {
			photos: [
				'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/1173217_690825600942509_1234812613_n.jpg?ig_cache_key=NjAxNjc2Mzk2MjIyNTQ0MDU3.2',
				'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/1690083_247937685389039_1950703556_n.jpg?ig_cache_key=NjQ1MDc2OTQ5OTgzODg2MTgz.2',
				'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/11098302_802222803197204_2055629007_n.jpg?ig_cache_key=OTU3NDczOTkzODk5OTY1NDMx.2'
			]
		};
	},

	render() {
		const { photos } = this.state;
		return(
			<div className="container">
				<div style={{marginTop: '8em', marginBottom: '2em'}} 
					className="about-content margin-small mt ml mr mb no-margin-on-mobile nmr nml">
					<div className="about-body padding-med pt pr pb pl">
						<div className="profile-pic-circle block">
							<div className="profile-pic-img">
								<img style={{width: '100%', borderRadius: '50%'}} src={'https://avatars2.githubusercontent.com/u/9124902?v=3&s=460'}/>
							</div>
						</div>
						<div className="info margin-large mt text-center">
							<h1 className="name black bold no-margin">Brennan Erbeznik</h1>
							<h3 className="title grey no-margin">Front End / UX Engineer</h3>
							<div className="about-bio margin-med mt padding-med pl pr no-padding-on-mobile npl npr">
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
							<div className="about-pics margin-med mt padding-med pl pr group no-padding-on-mobile npl npr">
								{
									photos.map(function(photo, i) {
										return (
											<a key={i} className="flex-third">
												<img style={{width: '100%'}} src={photo}/>
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
