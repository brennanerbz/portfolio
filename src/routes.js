import 'babel-polyfill';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Router from 'ampersand-router';

import Layout from './layout';
import HomePage from './pages/home';

export default Router.extend({
	routes: {
		'': 'home'
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
	}
});


