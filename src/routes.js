import 'babel-polyfill';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Router from 'ampersand-router';
import HomePage from './pages/home';

export default Router.extend({
	routes: {
		'': 'home'
	},
	renderPage(page, opts = { layout: true }) {
		render(page, document.body)
	},
	home() {
		this.renderPage(<HomePage/>, { layout: false })
	}
});


