const config = {
	'localhost': {
		apiUrl: 'http://localhost:5000/api/v1'
	},
	'erbeznik-portfolio.surge.sh': {
		apiUrl: 'https://erbeznik-portfolio.herokuapp.com/api/v1'
	},
	'brennanerbeznik.com': {
		apiUrl: 'https://erbeznik-portfolio.herokuapp.com/api/v1'
	}
}[window.location.hostname];

export default config;