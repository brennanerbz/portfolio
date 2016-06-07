import Router from './routes';
import app from 'ampersand-app';
import icons from 'octicons/octicons/octicons.css';

/* ===============
   STYLES
   =============== */
require('./styles/normalize.css');
require('./styles/github-markdown.css');
require('./styles/colors.scss');
require('./styles/global.scss');
require('./styles/layout.scss');
require('./styles/nav.scss');
require('./styles/footer.scss');
require('./styles/home.scss');
require('./styles/logo.scss');
require('./styles/card.scss');
require('./styles/project.scss');

window.app = app;

app.extend({
	init() {
		this.router = new Router();
		this.router.history.start()
	}
})
app.init();
