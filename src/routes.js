import 'babel-polyfill';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Router from 'ampersand-router';

import Layout from './layout';
import HomePage from './pages/home';
import ProjectPage from './pages/project';
import AboutPage from './pages/about';
import HireMePage from './pages/hire-me';

export default Router.extend({
	routes: {
		'': 'home',
		'work': 'home',
		'work/:project-name': 'project',
		'about': 'about',
		'hire-me': 'hireMe'
	},
	renderPage(page, opts = { layout: true }) {
		if(opts.layout) {
			render(
				<Layout>
					{page}
				</Layout>, 
				document.body
			);
		}
	},
	home() {
		this.renderPage(<HomePage/>)
	},
	project() {
		this.renderPage(<ProjectPage/>)
	},
	about() {
		this.renderPage(<AboutPage/>)
	},
	hireMe() {
		this.renderPage(<HireMePage/>)
	},
});


