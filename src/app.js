import Router from './routes';
import app from 'ampersand-app';
import config from './config';
import icons from 'octicons/octicons/octicons.css';

require('file?name=favicon.ico!./images/favicon.ico');

/* ===============
   STYLES
   =============== */
require('./styles/normalize.css');
require('./styles/github-markdown.css');
require('./styles/colors.scss');
require('./styles/font.scss');
require('./styles/global.scss');
require('./styles/layout.scss');
require('./styles/nav.scss');
require('./styles/footer.scss');
require('./styles/home.scss');
require('./styles/about.scss');
require('./styles/logo.scss');
require('./styles/card.scss');
require('./styles/button.scss');
require('./styles/form.scss');
require('./styles/project.scss');
require('./styles/hire-me.scss');


// window.app = app;
app.extend({
	init() {
		this.router = new Router();
		this.router.history.start()
	}
})
app.apiUrl = config.apiUrl;
app.init();
