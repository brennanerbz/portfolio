import Router from './routes';
import app from 'ampersand-app';
import icons from 'octicons/octicons/octicons.css'
import styles from './styles/main.scss';

window.app = app;

app.extend({
	init() {
		this.router = new Router();
		this.router.history.start()
	}
})
app.init();
