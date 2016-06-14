import 'babel-polyfill';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Router from 'ampersand-router';

import app from 'ampersand-app';
import Layout from './layout';
import HomePage from './pages/home';
import ProjectPage from './pages/project';
import CreateProjectPage from './pages/create-project';
import AboutPage from './pages/about';
import HireMePage from './pages/hire-me';

export default Router.extend({
	routes: {
		'': 'home',
		'create': 'createProject',
		'work': 'home',
		'work/:name': 'project',
		'about': 'about',
		'hire-me': 'hireMe',
		'edit/:name': 'editProject'
	},
	renderPage(page, opts = { layout: true }) {
		if(opts.layout) {
			render(
				<Layout router={app.router}>
					{page}
				</Layout>, 
				document.getElementById('root')
			);
		}
	},
	home() {
		this.renderPage(<HomePage/>)
	},
	createProject() {
		this.renderPage(<CreateProjectPage/>)
	},
	editProject(name) {
		this.renderPage(<CreateProjectPage name={name} editing={true}/>)
	},
	project(name) {
		this.renderPage(<ProjectPage name={name}/>)
	},
	about() {
		this.renderPage(<AboutPage/>)
	},
	hireMe() {
		this.renderPage(<HireMePage/>)
	},
});


