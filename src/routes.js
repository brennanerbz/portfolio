import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'ampersand-router';
import HomePage from './pages/home';

export default Router.extend({
	routes: {
		'': 'home'
	},
	renderPage(page, opts = { layout: true }) {
		ReactDOM.render(page, document.body)
	},
	home() {
		this.renderPage(<HomePage/>, { layout: false })
	}
});
