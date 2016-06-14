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
						<div className="info margin-large mt">
							<h1 className="name black bold no-margin text-center">Brennan Erbeznik</h1>
							<h3 className="title grey no-margin text-center">Front End / UX Engineer</h3>
							<div className="about-bio margin-med mt padding-large pl pr no-padding-on-mobile npl npr">
								<p className="about-info">
									I'm an engineer and designer living in Venice Beach, California. You can find me on Twitter, Instagram and GitHub. I've led front end engineering, user experience and design at multiple startups since 2012. 
								</p>
								<p className="about-info">What my resume won't tell you is what I believe, and why I do what I do.</p>
								<p className="about-info">
									I believe that there is a world out there, filled with people that undervalued and underutilized. I believe that everyone’s time is valuable, and that no matter where they’re from, what they do, or who they are, everyone has the opportunity to be paid for what they know or what they can do. I believe in bringing people together, and bringing the best out of them to ultimately find the truth and accomplish great things. I believe in creating tools that bring this wonderful world, and the people within it, to each other. 
								</p>
								<p className="about-info">
										I believe technology is the surest and only way to do so. In order for the future to be better, we must work on things that are different, that are new, that haven't been done before. I believe in companies that want to create these entirely new technologies. I believe in companies that are on a mission to enable people to live better, wealthier, happier and more productive lives. I believe in companies that bring a better future to us. 
								</p>
								<p className="about-info">
									Join me.
								</p>
							</div>
							<div className="about-pics margin-med mt padding-med pl pr group no-padding-on-mobile npl npr">
								{
									false && photos.map(function(photo, i) {
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
